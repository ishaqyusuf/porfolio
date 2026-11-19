import type { ReactNode } from "react"

import { illustrativeBar } from "@/lib/portfolio/content"
import type { StageHead, TrackState } from "@/lib/portfolio/types"

/** Frame for an illustrative product surface: sample data, never a screenshot. */
export function Stage({
  ariaLabel,
  children,
}: {
  ariaLabel: string
  children: ReactNode
}) {
  return (
    <div className="stage" role="img" aria-label={ariaLabel}>
      <div className="stage__bar">
        <strong>{illustrativeBar.label}</strong>
        <span>{illustrativeBar.note}</span>
      </div>
      <div className="stage__app">{children}</div>
    </div>
  )
}

export function AppHead({ head }: { head: StageHead }) {
  return (
    <div className="app__head">
      <div>
        <p className="app__crumb">{head.crumb}</p>
        <p className="app__title">{head.title}</p>
        <p className="app__sub">{head.sub}</p>
      </div>
      <span className="tag tag--signal">{head.tag}</span>
    </div>
  )
}

export function Track({
  labels,
  states,
}: {
  labels: string[]
  states: TrackState[]
}) {
  return (
    <ol className="track">
      {labels.map((label, i) => (
        <li
          key={label}
          className={states[i] === "todo" ? undefined : states[i]}
        >
          {label}
        </li>
      ))}
    </ol>
  )
}
