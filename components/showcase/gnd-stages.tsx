import { Fragment } from "react"

import { AppHead, Stage, Track } from "@/components/showcase/stage"
import { Icon } from "@/components/showcase/icon"
import {
  dispatchStage,
  gndTrack,
  paymentsStage,
  salesStage,
} from "@/lib/portfolio/content"

const sheetRows = [0, 1, 2, 3]

export function SalesStage() {
  const { data } = salesStage

  return (
    <Stage ariaLabel={salesStage.ariaLabel}>
      <AppHead head={salesStage.head} />
      <Track labels={gndTrack} states={salesStage.track} />
      <div className="split">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Qty</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item) => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
            <tr className="total">
              <td>{data.totalLabel}</td>
              <td>{data.total}</td>
            </tr>
          </tbody>
        </table>
        <div className="sheet-wrap">
          <div className="sheet">
            <span className="s-title" />
            <span className="s-w70" />
            <span className="s-w45" />
            {sheetRows.map((row) => (
              <span key={row} className="s-row">
                <i />
                <i />
              </span>
            ))}
            <span className="s-foot" />
          </div>
          <p className="sheet-cap">{data.snapshotCaption}</p>
        </div>
      </div>
    </Stage>
  )
}

export function PaymentsStage() {
  const { data } = paymentsStage

  return (
    <Stage ariaLabel={paymentsStage.ariaLabel}>
      <AppHead head={paymentsStage.head} />
      <Track labels={gndTrack} states={paymentsStage.track} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Entry</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.entries.map((entry) => (
            <tr key={entry.label}>
              <td>
                {entry.label}
                <br />
                <span className="muted">{entry.detail}</span>
              </td>
              <td>{entry.amount}</td>
            </tr>
          ))}
          <tr className="total">
            <td>{data.balanceLabel}</td>
            <td>{data.balance}</td>
          </tr>
        </tbody>
      </table>
      <p className="notice">
        <Icon name="bell" /> {data.notice}
      </p>
    </Stage>
  )
}

export function DispatchStage() {
  const { data } = dispatchStage

  return (
    <Stage ariaLabel={dispatchStage.ariaLabel}>
      <AppHead head={dispatchStage.head} />
      <Track labels={gndTrack} states={dispatchStage.track} />
      <div className="split">
        <ol className="stops">
          {data.stops.map((stop, i) => (
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
        <div className="phone-wrap">
          <div className="phone">
            <div className="phone__screen">
              <span className="phone__notch" />
              <span>{data.phone.position}</span>
              <span className="phone__big">{data.phone.order}</span>
              <span>
                {data.phone.lines.map((line, i) => (
                  <Fragment key={line}>
                    {i > 0 ? <br /> : null}
                    {line}
                  </Fragment>
                ))}
              </span>
              <span className="phone__state">{data.phone.state}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="notice">
        <Icon name="box" /> {data.notice}
      </p>
    </Stage>
  )
}
