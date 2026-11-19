import { AfterserviceExhibit } from "@/components/showcase/afterservice-exhibit"
import { GndExhibit } from "@/components/showcase/gnd-exhibit"
import { SectionIntro } from "@/components/showcase/section-intro"
import { workIntro } from "@/lib/portfolio/content"

export function WorkSection() {
  return (
    <section
      className="section"
      id="work"
      aria-labelledby="work-title"
      data-nav="work"
    >
      <div className="wrap">
        <SectionIntro intro={workIntro} titleId="work-title" />
        <GndExhibit />
        <AfterserviceExhibit />
      </div>
    </section>
  )
}
