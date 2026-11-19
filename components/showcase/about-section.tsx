import { about, toolGroups } from "@/lib/portfolio/content"

export function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <h2 id="about-title">{about.title}</h2>
        <div className="about__body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="tools">
            {toolGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.tools}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
