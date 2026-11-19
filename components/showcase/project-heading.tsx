import type { ReactNode } from "react"

import type { ProjectMeta } from "@/lib/portfolio/types"

/** Number badge, status and role chips, project name and one-line summary. */
export function ProjectHeading({
  meta,
  titleId,
}: {
  meta: ProjectMeta
  titleId: string
}) {
  return (
    <>
      <p className="meta-row">
        <span className="no">{meta.number}</span>
        <span className="chip chip--status">{meta.status}</span>
        <span className="chip">{meta.role}</span>
      </p>
      <h3 id={titleId}>{meta.name}</h3>
      <p className="project__line">{meta.line}</p>
    </>
  )
}

/** Mono tag chips, optionally followed by a link. */
export function Tags({
  items,
  label,
  link,
}: {
  items: string[]
  label?: string
  link?: ReactNode
}) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {link ? <li className="tags__link">{link}</li> : null}
    </ul>
  )
}
