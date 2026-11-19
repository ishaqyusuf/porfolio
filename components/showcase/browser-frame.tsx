import type { ReactNode } from "react"

import { ExternalAnchor, Icon } from "@/components/showcase/icon"
import { illustrative } from "@/lib/portfolio/content"
import type {
  ExternalLink,
  IllustrativeApp,
  TrackState,
} from "@/lib/portfolio/types"

/** "Illustrative · sample data, not a product screenshot". */
export function IllustrativeNote() {
  return (
    <>
      <strong>{illustrative.label}</strong> · {illustrative.note}
    </>
  )
}

/**
 * Browser window around an illustrative product surface: sample data built
 * in HTML, never a screenshot.
 */
export function BrowserFrame({
  site,
  ariaLabel,
  children,
}: {
  site: ExternalLink
  ariaLabel: string
  children: ReactNode
}) {
  return (
    <div className="browser">
      <div className="browser__bar">
        <span className="browser__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser__url">
          <Icon name="lock" />
          <span>{site.label}</span>
        </span>
        <ExternalAnchor className="browser__visit" href={site.href}>
          <span className="visit-text">{illustrative.visit}</span>
        </ExternalAnchor>
      </div>
      <p className="browser__label">
        <span>
          <IllustrativeNote />
        </span>
      </p>
      <div className="browser__view" role="img" aria-label={ariaLabel}>
        {children}
      </div>
    </div>
  )
}

/** Sidebar and main column of the illustrative app inside a browser frame. */
export function AppShell({
  name,
  nav,
  track,
  app,
  children,
}: {
  name: string
  nav: string[]
  track: string[]
  app: IllustrativeApp
  children: ReactNode
}) {
  return (
    <div className="app">
      <div className="app__side">
        <span className="app__logo">
          <i />
          {name}
        </span>
        <ul className="app__nav">
          {nav.map((item) => (
            <li key={item} className={item === app.nav ? "is-on" : undefined}>
              {item}
            </li>
          ))}
        </ul>
        <span className="app__user">
          <i />
          <b />
        </span>
      </div>
      <div className="app__main">
        <div className="app__top">
          <span className="app__crumb">{app.head.crumb}</span>
          <span className="app__search">
            <i />
            <b />
          </span>
        </div>
        <div className="app__head">
          <div>
            <p className="app__title">{app.head.title}</p>
            <p className="app__sub">{app.head.sub}</p>
          </div>
          <span className="tag">{app.head.tag}</span>
        </div>
        <Track labels={track} states={app.track} />
        {children}
      </div>
    </div>
  )
}

function Track({ labels, states }: { labels: string[]; states: TrackState[] }) {
  return (
    <ol className={labels.length === 4 ? "track track--4" : "track"}>
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

export function Notice({
  icon,
  children,
}: {
  icon: "bell" | "box" | "history"
  children: ReactNode
}) {
  return (
    <p className="notice">
      <Icon name={icon} />
      {children}
    </p>
  )
}
