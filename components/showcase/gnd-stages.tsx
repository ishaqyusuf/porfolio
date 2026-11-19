import type { ReactNode } from "react"

import {
  AppShell,
  BrowserFrame,
  IllustrativeNote,
  Notice,
} from "@/components/showcase/browser-frame"
import {
  dispatchStage,
  gnd,
  paymentsStage,
  salesStage,
} from "@/lib/portfolio/content"
import type { IllustrativeApp } from "@/lib/portfolio/types"

function GndBrowser({
  app,
  children,
}: {
  app: IllustrativeApp
  children: ReactNode
}) {
  return (
    <BrowserFrame site={gnd.link} ariaLabel={app.ariaLabel}>
      <AppShell name={gnd.appName} nav={gnd.appNav} track={gnd.track} app={app}>
        {children}
      </AppShell>
    </BrowserFrame>
  )
}

/** Paper PDF snapshot of the order, drawn as placeholder rules. */
function PdfSheet() {
  const rows = [0, 1, 2, 3]
  return (
    <div className="sheet">
      <span className="s-head">
        <i />
        <em />
      </span>
      <span style={{ width: "70%" }} />
      <span style={{ width: "45%" }} />
      <span className="s-rule" />
      {rows.map((row) => (
        <span key={row} className="s-row">
          <i />
          <i />
        </span>
      ))}
      <span className="s-rule" />
      <span className="s-foot" />
    </div>
  )
}

export function SalesVisual() {
  const stage = salesStage
  return (
    <div className="visual">
      <div className="visual__inner">
        <GndBrowser app={stage}>
          <div className="split">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{stage.columns[0]}</th>
                  <th scope="col">{stage.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {stage.items.map((item) => (
                  <tr key={item.label}>
                    <td>{item.label}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td>{stage.totalLabel}</td>
                  <td>{stage.total}</td>
                </tr>
              </tbody>
            </table>
            <div className="sheet-fig">
              <PdfSheet />
              <p className="sheet-cap">{stage.snapshotCaption}</p>
            </div>
          </div>
        </GndBrowser>
      </div>
    </div>
  )
}

export function PaymentsVisual() {
  const stage = paymentsStage
  return (
    <div className="visual">
      <div className="visual__inner">
        <GndBrowser app={stage}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">{stage.columns[0]}</th>
                <th scope="col">{stage.columns[1]}</th>
              </tr>
            </thead>
            <tbody>
              {stage.entries.map((entry) => (
                <tr key={entry.label}>
                  <td>
                    {entry.label}
                    <span className="muted">{entry.detail}</span>
                  </td>
                  <td>{entry.amount}</td>
                </tr>
              ))}
              <tr className="total">
                <td>{stage.balanceLabel}</td>
                <td>{stage.balance}</td>
              </tr>
            </tbody>
          </table>
          <div className="paid">
            <div className="paid__bar">
              <span
                style={{ width: `${(stage.paid.share * 100).toFixed(2)}%` }}
              />
            </div>
            <div className="paid__legend">
              <span>
                {stage.paid.recordedLabel} <b>{stage.paid.recorded}</b>
              </span>
              <span>
                {stage.paid.balanceLabel} <b>{stage.balance}</b>
              </span>
            </div>
          </div>
          <Notice icon="bell">{stage.notice}</Notice>
        </GndBrowser>
      </div>
    </div>
  )
}

export function DispatchVisual() {
  const stage = dispatchStage
  const { phone } = stage
  return (
    <div className="visual">
      <div className="visual__inner visual__inner--phone">
        <GndBrowser app={stage}>
          <ol className="stops">
            {stage.stops.map((stop, i) => (
              <li key={stop.order} className={stop.current ? "now" : undefined}>
                <span className="stop-n">{i + 1}</span>
                <span className="stop-main">
                  {stop.order}
                  <span>{stop.detail}</span>
                </span>
                <span className="stop-state">{stop.state}</span>
              </li>
            ))}
          </ol>
          <Notice icon="box">{stage.notice}</Notice>
        </GndBrowser>
        <figure className="handset-fig">
          <div className="handset">
            <div
              className="handset__screen"
              role="img"
              aria-label={phone.ariaLabel}
            >
              <span className="handset__island" />
              <div className="handset__top">
                <span>{phone.title}</span>
                <span>{phone.position}</span>
              </div>
              <p className="handset__big">{phone.order}</p>
              <div className="handset__lines">
                {phone.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
              <ol className="handset__route">
                {stage.stops.map((stop) => (
                  <li
                    key={stop.order}
                    className={stop.current ? "now" : undefined}
                  >
                    <i />
                    {stop.order}
                    <em>{stop.state}</em>
                  </li>
                ))}
              </ol>
              <p className="handset__state">{phone.state}</p>
            </div>
          </div>
          <figcaption className="fig-label">
            <IllustrativeNote />
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
