"use client"

import { useRef, useState } from "react"
import type { KeyboardEvent, ReactNode } from "react"

import { ExternalAnchor, Icon } from "@/components/showcase/icon"
import type {
  ExternalLink,
  GndScopeItem,
  GndStep,
  GndStepId,
} from "@/lib/portfolio/types"

type GndWorkflowProps = {
  /** Server-rendered project head: meta row, name, line and tags. */
  intro: ReactNode
  steps: GndStep[]
  /** Server-rendered illustrative visual for each step. */
  visuals: Record<GndStepId, ReactNode>
  scope: GndScopeItem[]
  copy: {
    tablistLabel: string
    keyHint: string
    modulesLabel: string
    scopeIntro: string
    scopeOpen: string
    scopeClose: string
    scopeLabel: string
    scopeFoot: string
    scopeCurrent: { prefix: string; suffix: string }
  }
  link: ExternalLink
}

const SCOPE_ID = "gnd-scope"
const TABLIST_LABEL_ID = "steps-label"

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth"
}

export function GndWorkflow({
  intro,
  steps,
  visuals,
  scope,
  copy,
  link,
}: GndWorkflowProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  // Panels animate in only once the visitor has chosen a step.
  const [hasSelected, setHasSelected] = useState(false)
  const [scopeOpen, setScopeOpen] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tablistRef = useRef<HTMLDivElement>(null)
  const scopeToggleRef = useRef<HTMLButtonElement>(null)

  const active = steps[activeIndex]

  function select(index: number, focus = false) {
    setActiveIndex(index)
    setHasSelected(true)
    if (focus) tabRefs.current[index]?.focus()
  }

  function onTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    const count = steps.length
    let next: number | undefined
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % count
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + count) % count
    } else if (event.key === "Home") {
      next = 0
    } else if (event.key === "End") {
      next = count - 1
    }
    if (next === undefined) return
    event.preventDefault()
    select(next, true)
  }

  function goTo(target: GndStep["next"]["target"]) {
    if (target === "scope") {
      setScopeOpen(true)
      const toggle = scopeToggleRef.current
      toggle?.scrollIntoView({ behavior: scrollBehavior(), block: "center" })
      toggle?.focus({ preventScroll: true })
      return
    }
    select(
      steps.findIndex((step) => step.id === target),
      true
    )
    const tablist = tablistRef.current
    if (tablist && tablist.getBoundingClientRect().top < 90) {
      tablist.scrollIntoView({ behavior: scrollBehavior(), block: "center" })
    }
  }

  return (
    <>
      <div className="project__head">
        {intro}
        <div className="stepper">
          <p className="stepper__label">
            <span id={TABLIST_LABEL_ID}>{copy.tablistLabel}</span>
            <span aria-hidden="true">{copy.keyHint}</span>
          </p>
          <div
            ref={tablistRef}
            className="steps"
            role="tablist"
            aria-labelledby={TABLIST_LABEL_ID}
          >
            {steps.map((step, i) => {
              const selected = i === activeIndex
              return (
                <button
                  key={step.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  className="step"
                  type="button"
                  role="tab"
                  id={`tab-${step.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${step.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(i)}
                  onKeyDown={(event) => onTabKeyDown(event, i)}
                >
                  <span className="step__n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="step__name">{step.name}</span>
                  <span className="step__sub">{step.sub}</span>
                </button>
              )
            })}
          </div>
          <div className="rail" aria-hidden="true">
            <span
              style={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {steps.map((step, i) => (
        <div
          key={step.id}
          className={hasSelected ? "panel is-entering" : "panel"}
          role="tabpanel"
          id={`panel-${step.id}`}
          aria-labelledby={`tab-${step.id}`}
          tabIndex={0}
          hidden={i !== activeIndex}
        >
          <div className="panel__copy">
            <h4>{step.heading}</h4>
            <p>{step.body}</p>
            <p className="list-label">{copy.modulesLabel}</p>
            <ul className="modules">
              {step.modules.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ul>
            <div className="panel__next">
              <button
                className={
                  step.next.target === "scope"
                    ? "link-btn link-btn--down"
                    : "link-btn"
                }
                type="button"
                onClick={() => goTo(step.next.target)}
              >
                {step.next.label}{" "}
                <Icon
                  name={step.next.target === "scope" ? "arrow-down" : "next"}
                />
              </button>
            </div>
          </div>
          {visuals[step.id]}
        </div>
      ))}

      <div className="scope-row">
        <p>{copy.scopeIntro}</p>
        <button
          ref={scopeToggleRef}
          className="btn"
          type="button"
          aria-expanded={scopeOpen}
          aria-controls={SCOPE_ID}
          onClick={() => setScopeOpen((open) => !open)}
        >
          <span>{scopeOpen ? copy.scopeClose : copy.scopeOpen}</span>{" "}
          <Icon name="down" className="chev" />
        </button>
      </div>
      <div className="scope" id={SCOPE_ID} hidden={!scopeOpen}>
        <ul className="scope__grid" aria-label={copy.scopeLabel}>
          {scope.map((item) => (
            <li
              key={item.label}
              className={
                item.steps.includes(active.id) ? "is-current" : undefined
              }
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="scope__foot">
          <span>{copy.scopeFoot}</span>
          <span>
            {copy.scopeCurrent.prefix} {active.name}, {copy.scopeCurrent.suffix}
          </span>
          <ExternalAnchor href={link.href}>{link.label}</ExternalAnchor>
        </div>
      </div>
    </>
  )
}
