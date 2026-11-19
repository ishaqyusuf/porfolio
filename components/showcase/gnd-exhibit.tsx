import {
  DispatchVisual,
  PaymentsVisual,
  SalesVisual,
} from "@/components/showcase/gnd-stages"
import { GndWorkflow } from "@/components/showcase/gnd-workflow"
import { ExternalAnchor } from "@/components/showcase/icon"
import { ProjectHeading, Tags } from "@/components/showcase/project-heading"
import { gnd, gndScope, gndSteps, tagsLabel } from "@/lib/portfolio/content"

export function GndExhibit() {
  return (
    <article className="project" id="gnd" aria-labelledby="gnd-title">
      <GndWorkflow
        intro={
          <div>
            <ProjectHeading meta={gnd.meta} titleId="gnd-title" />
            <Tags
              items={gnd.tags}
              label={tagsLabel}
              link={
                <ExternalAnchor href={gnd.link.href}>
                  {gnd.link.label}
                </ExternalAnchor>
              }
            />
          </div>
        }
        steps={gndSteps}
        visuals={{
          sales: <SalesVisual />,
          payments: <PaymentsVisual />,
          dispatch: <DispatchVisual />,
        }}
        scope={gndScope}
        copy={{
          tablistLabel: gnd.tablistLabel,
          keyHint: gnd.keyHint,
          modulesLabel: gnd.modulesLabel,
          scopeIntro: gnd.scopeIntro,
          scopeOpen: gnd.scopeOpen,
          scopeClose: gnd.scopeClose,
          scopeLabel: gnd.scopeLabel,
          scopeFoot: gnd.scopeFoot,
          scopeCurrent: gnd.scopeCurrent,
        }}
        link={gnd.link}
      />
    </article>
  )
}
