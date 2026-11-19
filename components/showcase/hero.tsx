import { Fragment } from "react"

import { ExternalAnchor, Icon } from "@/components/showcase/icon"
import { hero, links, nav, profile } from "@/lib/portfolio/content"

const orbitSlots = ["o1", "o2", "o3", "o4", "o5", "o6", "o7", "o8"]

export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title" data-nav="">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="kicker-line">
            {hero.kicker.map((part, i) => (
              <Fragment key={part}>
                {i > 0 ? <i aria-hidden="true" /> : null}
                <span>{part}</span>
              </Fragment>
            ))}
          </p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__lede">
            <strong>{hero.ledeLead}</strong> {hero.lede}
          </p>
          <ul className="caps" aria-label={hero.capabilitiesLabel}>
            {hero.capabilities.map((item) => (
              <li key={item.title}>
                <span className="caps__icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <b>{item.title}</b>
                <span>{item.sub}</span>
              </li>
            ))}
          </ul>
          <div className="hero__actions">
            <a className="btn btn--signal" href={hero.primary.href}>
              {hero.primary.label} <Icon name="next" className="go" />
            </a>
            <a className="btn" href={nav.hire.href}>
              {nav.hire.label}
            </a>
            <ExternalAnchor className="text-link" href={links.cv.href}>
              {hero.cv}
            </ExternalAnchor>
          </div>
          <p className="hero__where">
            <span>
              <Icon name="pin" />
              {hero.where}
            </span>
            <a href={links.email.href}>
              <Icon name="mail" />
              {profile.email}
            </a>
          </p>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <MonogramPlate />
        </div>
      </div>
    </section>
  )
}

function MonogramPlate() {
  return (
    <div className="plate">
      <span className="plate__corner tl" />
      <span className="plate__corner tr" />
      <span className="plate__corner bl" />
      <span className="plate__corner br" />
      <svg className="plate__rings" viewBox="0 0 400 400" fill="none">
        <circle
          cx="200"
          cy="200"
          r="198"
          stroke="#2B323D"
          strokeDasharray="2 7"
        />
        <circle cx="200" cy="200" r="160" stroke="#2B323D" />
        <circle cx="200" cy="200" r="122" stroke="#3A424F" />
        <path d="M200 2v18M200 380v18M2 200h18M380 200h18" stroke="#3A424F" />
        <circle cx="280" cy="61.4" r="5" fill="#F2B33D" />
        <circle cx="280" cy="61.4" r="11" stroke="#F2B33D" strokeOpacity=".4" />
        <circle cx="120" cy="338.6" r="3.5" fill="#3A424F" />
      </svg>
      <div className="plate__mark">
        <span>{profile.initials}</span>
      </div>
      <ul className="orbit">
        {hero.orbit.map((chip, i) => (
          <li
            key={chip.label}
            className={chip.lead ? `${orbitSlots[i]} is-lead` : orbitSlots[i]}
          >
            {chip.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
