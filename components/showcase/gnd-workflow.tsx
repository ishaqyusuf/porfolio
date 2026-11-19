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
  heading: ReactNode
  steps: GndStep[]
  stages: Record<GndStepId, ReactNode>
  scope: GndScopeItem[]
  tablistLabel: string
  modulesLabel: string
  scopeIntro: string
  scopeFoot: readonly string[]
  link: ExternalLink
}

const SCOPE_ID = "gnd-scope"

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth"
}

export function GndWorkflow({
  heading,
  steps,
  stages,
  scope,
  tablistLabel,
  modulesLabel,
  scopeIntro,
  scopeFoot,
  link,
}: GndWorkflowProps) {
  const [active, setActive] = useState<GndStepId>(steps[0].id)
  // Panels only animate in after the visitor has chosen a step.
  const [hasSelected, setHasSelected] = useState(false)
  const [scopeOpen, setScopeOpen] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tablistRef = useRef<HTMLDivElement>(null)
  const scopeToggleRef = useRef<HTMLButtonElement>(null)

  function select(index: number, focus = false) {
    setActive(steps[index].id)
    setHasSelected(true)
    if (focus) tabRefs.current[index]?.focus()
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = steps.length - 1
    let next: number | undefined
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1
    } else if (event.key === "Home") {
      next = 0
    } else if (event.key === "End") {
      next = last
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
    if (tablist && tablist.getBoundingClientRect().top < 60) {
      tablist.scrollIntoView({ behavior: scrollBehavior(), block: "center" })
    }
  }

  return (
    <>
      <div className="exhibit__head">
        {heading}
        <div
          ref={tablistRef}
          className="steps"
          role="tablist"
          aria-label={tablistLabel}
        >
          {steps.map((step, i) => {
            const selected = step.id === active
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
                <span className="step__n">{i + 1}</span>
                <span className="step__name">{step.name}</span>
                <span className="step__sub">{step.sub}</span>
              </button>
            )
          })}
        </div>
      </div>

      {steps.map((step) => (
        <div
          key={step.id}
          className={hasSelected ? "panel is-entering" : "panel"}
          role="tabpanel"
          id={`panel-${step.id}`}
          aria-labelledby={`tab-${step.id}`}
          hidden={step.id !== active}
        >
          <div className="panel__copy">
            <h3>{step.heading}</h3>
            <p>{step.body}</p>
            <p className="modules-label">{modulesLabel}</p>
            <ul className="modules">
              {step.modules.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ul>
            <div className="panel__next">
              <button
                className="link-btn"
                type="button"
                onClick={() => goTo(step.next.target)}
              >
                {step.next.label}{" "}
                <Icon name={step.next.target === "scope" ? "down" : "next"} />
              </button>
            </div>
          </div>
          {stages[step.id]}
        </div>
      ))}

      <div className="scope-row">
        <p>{scopeIntro}</p>
        <button
          ref={scopeToggleRef}
          className="btn"
          type="button"
          aria-expanded={scopeOpen}
          aria-controls={SCOPE_ID}
          onClick={() => setScopeOpen((open) => !open)}
        >
          <span className="label">
            {scopeOpen ? "Close the full GND scope" : "Open the full GND scope"}
          </span>{" "}
          <Icon name="down" />
        </button>
      </div>
      <div className="scope" id={SCOPE_ID} hidden={!scopeOpen}>
        <ul className="scope__grid">
          {scope.map((item) => (
            <li
              key={item.label}
              className={item.steps.includes(active) ? "is-current" : undefined}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="scope__foot">
          {scopeFoot.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <ExternalAnchor href={link.href}>{link.label}</ExternalAnchor>
        </div>
      </div>
    </>
  )
}
