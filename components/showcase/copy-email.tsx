"use client"

import { useEffect, useRef, useState } from "react"

import { Icon } from "@/components/showcase/icon"

type CopyEmailChannelProps = {
  email: string
  copy: {
    key: string
    copy: string
    copied: string
    openMail: string
    copiedStatus: string
    failedStatus: string
  }
}

const RESET_AFTER_MS = 2400

function fallbackCopy(text: string) {
  const area = document.createElement("textarea")
  area.value = text
  area.setAttribute("readonly", "")
  Object.assign(area.style, {
    position: "fixed",
    top: "0",
    left: "0",
    opacity: "0",
  })
  document.body.appendChild(area)
  area.select()
  let ok = false
  try {
    ok = document.execCommand("copy")
  } catch {
    ok = false
  }
  document.body.removeChild(area)
  return ok
}

/** Primary email channel with Copy (clipboard plus fallback) and Open mail. */
export function CopyEmailChannel({ email, copy }: CopyEmailChannelProps) {
  const [result, setResult] = useState<"idle" | "copied" | "failed">("idle")
  const valueRef = useRef<HTMLSpanElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function show(ok: boolean) {
    window.clearTimeout(timer.current)
    setResult(ok ? "copied" : "failed")
    if (!ok && valueRef.current) {
      // Select the address so it can be copied by hand.
      const range = document.createRange()
      range.selectNodeContents(valueRef.current)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
    timer.current = window.setTimeout(() => setResult("idle"), RESET_AFTER_MS)
  }

  function onCopy() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(
        () => show(true),
        () => show(fallbackCopy(email))
      )
    } else {
      show(fallbackCopy(email))
    }
  }

  return (
    <li className="channel channel--primary">
      <div>
        <span className="channel__k">{copy.key}</span>
        <span className="channel__v" ref={valueRef}>
          {email}
        </span>
      </div>
      <div className="channel__actions">
        <button className="btn btn--ink btn--sm" type="button" onClick={onCopy}>
          <Icon name="copy" />
          <span>{result === "copied" ? copy.copied : copy.copy}</span>
        </button>
        <a className="btn btn--sm" href={`mailto:${email}`}>
          <Icon name="mail" />
          {copy.openMail}
        </a>
      </div>
      <p className="copy-status" role="status" aria-live="polite">
        {result === "copied"
          ? copy.copiedStatus
          : result === "failed"
            ? copy.failedStatus
            : ""}
      </p>
    </li>
  )
}
