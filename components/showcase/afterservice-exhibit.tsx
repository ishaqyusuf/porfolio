import {
  AppShell,
  BrowserFrame,
  Notice,
} from "@/components/showcase/browser-frame"
import { ExternalAnchor } from "@/components/showcase/icon"
import { ProjectHeading, Tags } from "@/components/showcase/project-heading"
import { afterservice, tagsLabel } from "@/lib/portfolio/content"

const boardColumns = [3, 2]

export function AfterserviceExhibit() {
  const { stage } = afterservice
  const workflowNames = afterservice.workflow.map((step) => step.name)

  return (
    <article className="project" id="afterservice" aria-labelledby="as-title">
      <div className="project__head">
        <div>
          <ProjectHeading meta={afterservice.meta} titleId="as-title" />
        </div>
        <div className="as-flow">
          <p className="stepper__label">
            <span>{afterservice.workflowLabel}</span>
          </p>
          <ol
            className="steps steps--4 steps--static"
            aria-label={afterservice.workflowLabel}
          >
            {afterservice.workflow.map((step, i) => (
              <li key={step.name} className="step">
                <span className="step__n">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="step__name">{step.name}</span>
                <span className="step__sub">{step.sub}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="as-grid">
        <div className="as-copy">
          <h4>{afterservice.heading}</h4>
          <p className="as-desc">{afterservice.description}</p>
          <p>{afterservice.loop}</p>
          <p className="list-label">{afterservice.modulesLabel}</p>
          <ul className="mods">
            {afterservice.modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
          <p className="soon">
            <b>{afterservice.comingSoon.badge}</b>
            <span>{afterservice.comingSoon.text}</span>
          </p>
          <ExternalAnchor className="btn" href={afterservice.link.href}>
            {afterservice.cta}
          </ExternalAnchor>
        </div>
        <div className="visual">
          <div className="visual__inner">
            <BrowserFrame site={afterservice.link} ariaLabel={stage.ariaLabel}>
              <AppShell
                name={afterservice.meta.name}
                nav={afterservice.appNav}
                track={workflowNames}
                app={stage}
              >
                <div className="split">
                  <ol className="log">
                    {stage.log.map((entry) => (
                      <li
                        key={entry.title}
                        className={entry.current ? "now" : undefined}
                      >
                        <span className="log__day">{entry.day}</span>
                        <span className="log__body">
                          {entry.title}
                          <span>{entry.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  <div className="board">
                    <p className="board__cap">{stage.board.caption}</p>
                    <div className="board__cols">
                      {boardColumns.map((cards, col) => (
                        <div key={col} className="board__col">
                          <i />
                          {Array.from({ length: cards }, (_, card) => (
                            <SkeletonCard key={card} />
                          ))}
                        </div>
                      ))}
                      <div className="board__col">
                        <i />
                        <span className="card-real">
                          {stage.board.card}
                          <span>{stage.board.state}</span>
                        </span>
                        <SkeletonCard />
                      </div>
                    </div>
                  </div>
                </div>
                <Notice icon="history">{stage.notice}</Notice>
              </AppShell>
            </BrowserFrame>
          </div>
        </div>
      </div>

      <div className="as-foot">
        <p>{afterservice.stack}</p>
        <Tags items={afterservice.tags} label={tagsLabel} />
      </div>
    </article>
  )
}

function SkeletonCard() {
  return (
    <span className="card-sk">
      <b />
      <b />
    </span>
  )
}
