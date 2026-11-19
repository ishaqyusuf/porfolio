import {
  DispatchStage,
  PaymentsStage,
  SalesStage,
} from "@/components/showcase/gnd-stages"
import { GndWorkflow } from "@/components/showcase/gnd-workflow"
import { ExternalAnchor } from "@/components/showcase/icon"
import { gnd, gndScope, gndSteps } from "@/lib/portfolio/content"

export function GndSection() {
  return (
    <section id="work" className="exhibit" aria-labelledby="gnd-title">
      <div className="wrap">
        <GndWorkflow
          heading={
            <div>
              <h2 id="gnd-title">{gnd.name}</h2>
              <p className="exhibit__meta">
                <span>{gnd.type}</span>
                <span>{gnd.role}</span>
                <ExternalAnchor href={gnd.link.href}>
                  {gnd.link.label}
                </ExternalAnchor>
              </p>
            </div>
          }
          steps={gndSteps}
          stages={{
            sales: <SalesStage />,
            payments: <PaymentsStage />,
            dispatch: <DispatchStage />,
          }}
          scope={gndScope}
          tablistLabel={gnd.tablistLabel}
          modulesLabel={gnd.modulesLabel}
          scopeIntro={gnd.scopeIntro}
          scopeFoot={gnd.scopeFoot}
          link={gnd.link}
        />
      </div>
    </section>
  )
}
