import { ExternalAnchor } from "@/components/showcase/icon"
import { hero, links } from "@/lib/portfolio/content"

export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <h1 id="hero-title">{hero.title}</h1>
      <div className="hero__row">
        <p className="hero__lede">
          <strong>{hero.ledeLead}</strong> {hero.lede}
        </p>
        <div className="hero__actions">
          <a className="btn btn--signal" href={links.email.href}>
            Email me
          </a>
          <ExternalAnchor className="btn" href={links.cv.href}>
            Read the CV
          </ExternalAnchor>
        </div>
      </div>
    </section>
  )
}
