import { ExternalAnchor, StatusIcon } from "@/components/showcase/icon"
import {
  labStatusLabel,
  labs,
  labsIntro,
} from "@/lib/portfolio/content"
import type { ProductLab } from "@/lib/portfolio/types"

function Lab({ lab }: { lab: ProductLab }) {
  return (
    <article className={`lab lab--${lab.layout}`} aria-labelledby={lab.id}>
      <div>
        <div className="lab__top">
          <h3 id={lab.id}>{lab.name}</h3>
          <span className="status">
            <StatusIcon variant={lab.status} />
            {labStatusLabel[lab.status]}
          </span>
        </div>
        <p className="lab__type">{lab.type}</p>
        <p className="lab__desc">{lab.description}</p>
        <ExternalAnchor className="lab__link" href={lab.link.href}>
          {lab.link.label}
        </ExternalAnchor>
      </div>
      <div className="map">
        <p className="map__label">{labsIntro.mapLabel}</p>
        <ol className="chain">
          {lab.chain.map((item) => (
            <li key={item}>
              <span>{item}</span>
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
  )
}

export function LabsSection() {
  return (
    <section className="labs" id="labs" aria-labelledby="labs-title">
      <div className="wrap">
        <div className="labs__head">
          <h2 id="labs-title">{labsIntro.title}</h2>
          <p>{labsIntro.body}</p>
        </div>
        <div className="labs__grid">
          {labs.map((lab) => (
            <Lab key={lab.id} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  )
}
