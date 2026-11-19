import { Icon } from "@/components/showcase/icon"
import { Kicker } from "@/components/showcase/section-intro"
import { about, links, profile } from "@/lib/portfolio/content"

export function AboutSection() {
  return (
    <section
      className="section"
      id="about"
      aria-labelledby="about-title"
      data-nav="about"
    >
      <div className="wrap">
        <Kicker number={about.number} label={about.kicker} />
        <div className="about__grid">
          <div>
            <div className="id-card">
              <div className="id-card__top">
                <span className="mark" aria-hidden="true">
                  {profile.initials}
                </span>
                <div>
                  <p className="id-card__name">{profile.name}</p>
                  <p className="id-card__role">{profile.role}</p>
                </div>
              </div>
              <dl className="facts">
                {about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
                <div>
                  <dt>{about.emailLabel}</dt>
                  <dd>
                    <a href={links.email.href}>{profile.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>{about.elsewhereLabel}</dt>
                  <dd className="links">
                    {[links.github, links.linkedin].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <a
              className="cv-card"
              href={links.cv.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cv-card__doc" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="cv-card__text">
                <b>{about.cvCard.title}</b>
                <span>{about.cvCard.note}</span>
              </span>
              <span className="cv-card__go" aria-hidden="true">
                <Icon name="out" />
              </span>
            </a>
          </div>
          <div className="about__copy">
            <h2 id="about-title">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
