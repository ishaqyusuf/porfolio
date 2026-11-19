import { ExternalAnchor, StatusIcon } from "@/components/showcase/icon"
import { SectionIntro } from "@/components/showcase/section-intro"
import {
  labMapLabel,
  labs,
  labsIntro,
  labStatusLabel,
} from "@/lib/portfolio/content"

export function LabsSection() {
  return (
    <section
      className="section"
      id="labs"
      aria-labelledby="labs-title"
      data-nav="work"
    >
      <div className="wrap">
        <SectionIntro intro={labsIntro} titleId="labs-title" />
        <div className="labs__grid">
          {labs.map((lab) => (
            <article
              key={lab.id}
              className={`lab lab--${lab.layout}`}
              id={lab.id}
              aria-labelledby={`${lab.id}-title`}
            >
              <div className="lab__main">
                <p className="meta-row">
                  <span className="no">{lab.number}</span>
                  <span className="chip">
                    <StatusIcon variant={lab.status} />
                    {labStatusLabel[lab.status]}
                  </span>
                </p>
                <h3 id={`${lab.id}-title`}>{lab.name}</h3>
                <p className="lab__type">{lab.type}</p>
                <p className="lab__desc">{lab.description}</p>
                <ExternalAnchor className="text-link" href={lab.link.href}>
                  {lab.link.label}
                </ExternalAnchor>
              </div>
              <div className="map">
                <p className="map__label">{labMapLabel}</p>
                <ol className="chain">
                  {lab.chain.map((step) => (
                    <li key={step}>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <ul className="set">
                  {lab.set.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
