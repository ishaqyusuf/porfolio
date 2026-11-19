export type ExternalLink = {
  label: string
  href: string
}

/** A numbered homepage section: "01 — Selected work" plus its heading. */
export type SectionIntro = {
  number: string
  kicker: string
  title: string
  body?: string
}

export type NavItem = {
  label: string
  href: string
  /** Matches the `data-nav` key of the section it points to. */
  spy: string
  number: string
}

export type CapabilityIcon = "layers" | "layout" | "doc" | "clock"

export type HeroCapability = {
  icon: CapabilityIcon
  title: string
  sub: string
}

export type OrbitChip = {
  label: string
  lead?: boolean
}

export type TickerItem = {
  name: string
  domain: string
  href: string
}

/* Project exhibits */

export type ProjectMeta = {
  number: string
  status: string
  role: string
  name: string
  line: string
}

/** Track positions shared by every illustrative stage. */
export type TrackState = "done" | "now" | "todo"

export type StageHead = {
  crumb: string
  title: string
  sub: string
  tag: string
}

/** Illustrative app shown inside a browser frame: sample data only. */
export type IllustrativeApp = {
  ariaLabel: string
  nav: string
  head: StageHead
  track: TrackState[]
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

export type SalesStage = IllustrativeApp & {
  columns: [string, string]
  items: { label: string; qty: number }[]
  totalLabel: string
  total: number
  snapshotCaption: string
}

export type PaymentsStage = IllustrativeApp & {
  columns: [string, string]
  entries: { label: string; detail: string; amount: string }[]
  balanceLabel: string
  balance: string
  paid: {
    recordedLabel: string
    recorded: string
    balanceLabel: string
    /** Share of the order total recorded so far, 0–1. */
    share: number
  }
  notice: string
}

export type DispatchStop = {
  order: string
  detail: string
  state: string
  current?: boolean
}

export type DispatchStage = IllustrativeApp & {
  stops: DispatchStop[]
  notice: string
  phone: {
    ariaLabel: string
    title: string
    position: string
    order: string
    lines: string[]
    state: string
  }
}

export type ContactLogEntry = {
  day: string
  title: string
  detail: string
  current?: boolean
}

export type AfterserviceStage = IllustrativeApp & {
  log: ContactLogEntry[]
  board: { caption: string; card: string; state: string }
  notice: string
}

/* Labs, capabilities, roles */

export type LabStatus = "development" | "early"

export type ProductLab = {
  id: string
  number: string
  name: string
  status: LabStatus
  type: string
  description: string
  link: ExternalLink
  layout: "wide" | "narrow"
  chain: string[]
  set: string[]
}

export type CapabilityGroup = {
  key: string
  title: string
  body: string
  tags: string[]
}

export type Role = {
  side: string
  title: string
  org: string
  body: string
  skills: string
  link: { label: string; href: string; direction: "up" | "down" }
}

export type Fact = {
  label: string
  value: string
}

export type ContactChannel = {
  key: string
  value: string
  href: string
  ariaLabel: string
}
