import { AppHead, Stage, Track } from "@/components/showcase/stage"
import { ExternalAnchor, Icon, StatusIcon } from "@/components/showcase/icon"
import { afterservice } from "@/lib/portfolio/content"

const boardColumns = [2, 1, 1]

function AfterserviceStage() {
  const { stage, workflow } = afterservice

  return (
    <Stage ariaLabel={stage.ariaLabel}>
      <AppHead head={stage.head} />
      <Track labels={workflow.map((step) => step.name)} states={stage.track} />
      <div className="split">
        <ol className="stops log">
          {stage.log.map((entry) => (
            <li
              key={`${entry.day}-${entry.title}`}
              className={entry.current ? "now" : undefined}
            >
              <span className="log__day">{entry.day}</span>
              <span className="stop-main">
                {entry.title}
                <span>{entry.detail}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="board-wrap">
          <div className="board">
            {boardColumns.map((cards, col) => (
              <span key={col} className="board__col">
                <span className="board__h" />
                {Array.from({ length: cards }, (_, card) => (
                  <span
                    key={card}
                    className={
                      col === boardColumns.length - 1
                        ? "board__card is-now"
                        : "board__card"
                    }
                  />
                ))}
              </span>
            ))}
          </div>
          <p className="sheet-cap">{stage.boardCaption}</p>
        </div>
      </div>
      <p className="notice">
        <Icon name="check" /> {stage.notice}
      </p>
    </Stage>
  )
}

export function AfterserviceSection() {
  return (
    <section
      id="afterservice"
      className="exhibit product"
      aria-labelledby="afterservice-title"
    >
      <div className="wrap">
        <div className="exhibit__head">
          <div>
            <h2 id="afterservice-title">{afterservice.name}</h2>
            <p className="exhibit__meta">
              <span>{afterservice.label}</span>
              <span>{afterservice.audience}</span>
              <ExternalAnchor href={afterservice.link.href}>
                {afterservice.link.label}
              </ExternalAnchor>
            </p>
          </div>
          <ol className="steps flow" aria-label={afterservice.workflowLabel}>
            {afterservice.workflow.map((step, i) => (
              <li key={step.name} className="step">
                <span className="step__n">{i + 1}</span>
                <span className="step__name">{step.name}</span>
                <span className="step__sub">{step.sub}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="panel">
          <div className="panel__copy">
            <h3>{afterservice.heading}</h3>
            <p>{afterservice.description}</p>
            <p>{afterservice.loop}</p>
            <p className="modules-label">{afterservice.modulesLabel}</p>
            <ul className="modules">
              {afterservice.modules.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ul>
            <div className="panel__next">
              <ExternalAnchor className="btn" href={afterservice.link.href}>
                {afterservice.cta}
              </ExternalAnchor>
            </div>
          </div>
          <AfterserviceStage />
        </div>

        <div className="scope-row">
          <p>{afterservice.stack}</p>
          <span className="status">
            <StatusIcon variant="early" />
            {afterservice.comingSoon}
          </span>
        </div>
      </div>
    </section>
  )
}
