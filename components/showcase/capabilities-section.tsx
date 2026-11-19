import { Tags } from "@/components/showcase/project-heading"
import { SectionIntro } from "@/components/showcase/section-intro"
import { capabilityGroups, stackIntro } from "@/lib/portfolio/content"

export function CapabilitiesSection() {
  return (
    <section
      className="section"
      id="stack"
      aria-labelledby="stack-title"
      data-nav="stack"
    >
      <div className="wrap">
        <SectionIntro intro={stackIntro} titleId="stack-title" />
        <div className="caps-grid">
          {capabilityGroups.map((group) => (
            <div key={group.key} className="cap">
              <p className="cap__n">{group.key}</p>
              <h3>{group.title}</h3>
              <p>{group.body}</p>
              <Tags items={group.tags} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
