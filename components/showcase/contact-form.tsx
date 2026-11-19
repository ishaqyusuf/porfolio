"use client"

import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"

import { Icon } from "@/components/showcase/icon"

type FieldCopy = { label: string; placeholder: string; error: string }

type ContactFormProps = {
  copy: {
    title: string
    badge: string
    name: FieldCopy
    email: FieldCopy
    message: FieldCopy
    submit: string
    note: string
    sent: {
      title: string
      thanksPrefix: string
      thanksSuffix: string
      reach: string
      again: string
    }
  }
}

type FieldName = "name" | "email" | "message"
type Values = Record<FieldName, string>
/** undefined until a field has been checked, then true when it is invalid. */
type Invalid = Partial<Record<FieldName, boolean>>

const FIELDS: FieldName[] = ["name", "email", "message"]
const EMPTY: Values = { name: "", email: "", message: "" }

const isValid: Record<FieldName, (value: string) => boolean> = {
  name: (value) => value.trim().length > 0,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
  message: (value) => value.trim().length > 0,
}

/**
 * Preview-only contact form: it validates locally and echoes the note back.
 * Nothing is sent anywhere; typed text is rendered as React text, never HTML.
 */
export function ContactForm({ copy }: ContactFormProps) {
  const [values, setValues] = useState<Values>(EMPTY)
  const [invalid, setInvalid] = useState<Invalid>({})
  const [sent, setSent] = useState<{ name: string; note: string } | null>(null)
  const fieldRefs = useRef<
    Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>
  >({})
  const sentRef = useRef<HTMLDivElement>(null)
  const returning = useRef(false)

  useEffect(() => {
    if (sent) {
      sentRef.current?.focus()
    } else if (returning.current) {
      returning.current = false
      fieldRefs.current.name?.focus()
    }
  }, [sent])

  function onChange(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    // Re-check only a field already flagged, so errors clear as you fix them.
    if (invalid[field]) {
      setInvalid((current) => ({ ...current, [field]: !isValid[field](value) }))
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Invalid = {}
    for (const field of FIELDS) next[field] = !isValid[field](values[field])
    setInvalid(next)
    const firstBad = FIELDS.find((field) => next[field])
    if (firstBad) {
      fieldRefs.current[firstBad]?.focus()
      return
    }
    setSent({ name: values.name.trim(), note: values.message.trim() })
  }

  function writeAnother() {
    returning.current = true
    setValues(EMPTY)
    setInvalid({})
    setSent(null)
  }

  function fieldProps(field: FieldName) {
    return {
      id: `f-${field}`,
      name: field,
      value: values[field],
      placeholder: copy[field].placeholder,
      required: true,
      "aria-invalid": invalid[field] === undefined ? undefined : invalid[field],
      "aria-describedby": `f-${field}-err`,
    }
  }

  function error(field: FieldName) {
    return (
      <p className="field__err" id={`f-${field}-err`} hidden={!invalid[field]}>
        <Icon name="alert" />
        <span>{copy[field].error}</span>
      </p>
    )
  }

  return (
    <div className="form-card">
      <form
        noValidate
        aria-labelledby="form-title"
        onSubmit={onSubmit}
        hidden={sent !== null}
      >
        <div className="form-card__head">
          <h3 id="form-title">{copy.title}</h3>
          <span>{copy.badge}</span>
        </div>
        <div className="fields">
          <div className="field">
            <label htmlFor="f-name">{copy.name.label}</label>
            <input
              {...fieldProps("name")}
              ref={(el) => {
                fieldRefs.current.name = el
              }}
              type="text"
              autoComplete="name"
              onChange={(event) => onChange("name", event.target.value)}
            />
            {error("name")}
          </div>
          <div className="field">
            <label htmlFor="f-email">{copy.email.label}</label>
            <input
              {...fieldProps("email")}
              ref={(el) => {
                fieldRefs.current.email = el
              }}
              type="email"
              autoComplete="email"
              inputMode="email"
              onChange={(event) => onChange("email", event.target.value)}
            />
            {error("email")}
          </div>
          <div className="field field--full">
            <label htmlFor="f-message">{copy.message.label}</label>
            <textarea
              {...fieldProps("message")}
              ref={(el) => {
                fieldRefs.current.message = el
              }}
              rows={5}
              onChange={(event) => onChange("message", event.target.value)}
            />
            {error("message")}
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn--signal" type="submit">
            {copy.submit} <Icon name="next" className="go" />
          </button>
          <p>{copy.note}</p>
        </div>
      </form>
      <div
        ref={sentRef}
        className="sent"
        role="status"
        tabIndex={-1}
        hidden={sent === null}
      >
        <span className="sent__icon" aria-hidden="true">
          <Icon name="check" />
        </span>
        <h3>{copy.sent.title}</h3>
        <p>
          {sent
            ? `${copy.sent.thanksPrefix} ${sent.name}. ${copy.sent.thanksSuffix}`
            : null}
        </p>
        <p className="echo">{sent?.note}</p>
        <p>{copy.sent.reach}</p>
        <button className="btn btn--ghost" type="button" onClick={writeAnother}>
          {copy.sent.again}
        </button>
      </div>
    </div>
  )
}
