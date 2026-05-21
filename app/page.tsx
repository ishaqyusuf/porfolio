import { LinkList } from "@/components/portfolio/link-list"
import { SiteShell } from "@/components/portfolio/site-shell"
import { WorkList } from "@/components/portfolio/work-list"
import { Badge } from "@/components/ui/badge"
import {
  profile,
  profileLinks,
  selectedWork,
  stackHighlights,
} from "@/lib/portfolio/content"

export default function Page() {
  return (
    <SiteShell>
      <section id="about" className="py-20 sm:py-28">
        <p className="text-sm font-medium text-muted-foreground">
          {profile.role}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          About
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
          <p>{profile.summary}</p>
          <p>{profile.focus}</p>
          <p>{profile.proof}</p>
        </div>
        <LinkList links={profileLinks} className="mt-8" />
      </section>

      <section
        id="work"
        className="pb-16 sm:pb-20"
        aria-labelledby="work-title"
      >
        <div className="mb-7">
          <h2 id="work-title" className="text-lg font-semibold">
            Selected work
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Client systems and open-source product labs around operations, SaaS,
            data models, dashboards, and practical business workflows.
          </p>
        </div>
        <WorkList work={selectedWork} />
      </section>

      <section
        id="contact"
        className="pb-16 sm:pb-20"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="text-lg font-semibold">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          I am currently open to remote roles and relocation opportunities
          across the Middle East, especially full-stack, product engineering,
          internal tools, SaaS, and business workflow roles.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">{profile.location}</p>
        <LinkList links={profileLinks} className="mt-6" />
      </section>

      <section className="pb-16 sm:pb-20" aria-labelledby="stack-title">
        <h2 id="stack-title" className="text-lg font-semibold">
          Stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stackHighlights.map((item) => (
            <li key={item}>
              <Badge variant="outline">{item}</Badge>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  )
}
