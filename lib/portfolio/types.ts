export type ExternalLink = {
  label: string
  href: string
}

export type GndStepId = "sales" | "payments" | "dispatch"

export type GndStep = {
  id: GndStepId
  name: string
  sub: string
  heading: string
  body: string
  modules: string[]
  next: { label: string; target: GndStepId | "scope" }
}

export type GndScopeItem = {
  label: string
  steps: GndStepId[]
}

export type StageHead = {
  crumb: string
  title: string
  sub: string
  tag: string
}

/** Track positions shared by every illustrative GND stage. */
export type TrackState = "done" | "now" | "todo"

export type IllustrativeStage<TData> = {
  ariaLabel: string
  head: StageHead
  track: TrackState[]
  data: TData
}

export type SalesStageData = {
  items: { label: string; qty: number }[]
  totalLabel: string
  total: number
  snapshotCaption: string
}

export type PaymentsStageData = {
  entries: { label: string; detail: string; amount: string }[]
  balanceLabel: string
  balance: string
  notice: string
}

export type DispatchStageData = {
  stops: { order: string; detail: string; state: string; current?: boolean }[]
  phone: { position: string; order: string; lines: string[]; state: string }
  notice: string
}

export type ProductWorkflowStep = {
  name: string
  sub: string
}

export type ContactLogEntry = {
  day: string
  title: string
  detail: string
  current?: boolean
}

export type IndependentProduct = {
  name: string
  label: string
  audience: string
  link: ExternalLink
  cta: string
  workflowLabel: string
  workflow: ProductWorkflowStep[]
  heading: string
  description: string
  loop: string
  modulesLabel: string
  modules: string[]
  comingSoon: string
  stack: string
  stage: {
    ariaLabel: string
    head: StageHead
    track: TrackState[]
    log: ContactLogEntry[]
    boardCaption: string
    notice: string
  }
}

export type LabStatus = "development" | "early"

export type ProductLab = {
  id: string
  name: string
  status: LabStatus
  type: string
  description: string
  link: ExternalLink
  layout: "wide" | "narrow"
  chain: string[]
  set: string[]
}

export type ToolGroup = {
  label: string
  tools: string
}
