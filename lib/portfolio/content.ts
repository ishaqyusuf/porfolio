import type {
  DispatchStageData,
  ExternalLink,
  GndScopeItem,
  GndStep,
  IllustrativeStage,
  IndependentProduct,
  PaymentsStageData,
  ProductLab,
  SalesStageData,
  ToolGroup,
} from "@/lib/portfolio/types"

export const profile = {
  name: "Ishaq Yusuf",
  role: "Senior Full-Stack Product Engineer",
  location: "Remote; open to relocation across the Middle East",
  email: "ishaqyusuf024@gmail.com",
  summary:
    "I am a self-taught full-stack product engineer with 12+ years of programming experience and nearly 5 years focused on Next.js, React, TypeScript, Node.js, and modern full-stack product systems.",
  focus:
    "Most of my work sits close to real operations: sales workflows, order systems, customer portals, dashboards, payments, print/PDF flows, notifications, jobs, and business-specific tooling.",
  proof:
    "My strongest recent work is GND, a large TypeScript/Next.js monorepo for business operations covering dealer onboarding, sales workflows, payments, dispatch, inventory, notifications, jobs, PDF/print systems, reporting, and mobile support.",
}

export const links = {
  email: { label: "Email", href: `mailto:${profile.email}` },
  cv: {
    label: "CV",
    href: "https://docs.google.com/document/d/1WmEa7aK32kZ9lkplXC-niW1FWu7o0s34woYlZPO-KpM/edit?usp=sharing",
  },
  github: { label: "GitHub", href: "https://github.com/ishaqyusuf" },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ishaq-yusuf/",
  },
} satisfies Record<string, ExternalLink>

export const hero = {
  title: "I build the software behind everyday business.",
  ledeLead: "From a dealer’s first order to the delivery.",
  lede: "I’m Ishaq Yusuf, a senior full-stack product engineer and lead developer of GND Millwork’s operations platform. Step through an order in it below.",
}

/* GND Millwork: primary professional proof */

export const gnd = {
  name: "GND Millwork",
  type: "Client operations platform",
  role: "Lead developer",
  link: { label: "gndprodesk.com", href: "https://gndprodesk.com" },
  tablistLabel: "Order workflow in GND",
  modulesLabel: "Parts of GND in this step",
  scopeIntro:
    "One large TypeScript and Next.js monorepo carries all of this, plus reporting and mobile support.",
  scopeFoot: [
    "Bespoke business operations platform · I’m the lead developer",
    "Highlighted: the step selected above",
  ],
} as const

export const gndSteps: GndStep[] = [
  {
    id: "sales",
    name: "Sales",
    sub: "Dealer and order",
    heading: "It starts with a dealer.",
    body: "Dealers are onboarded into the platform, and their orders move through GND’s sales workflows. An order can be captured as a print or PDF snapshot, so there is a fixed copy to work from.",
    modules: ["Dealer onboarding", "Sales workflows", "Print and PDF snapshots"],
    next: { label: "Next: payments", target: "payments" },
  },
  {
    id: "payments",
    name: "Payments",
    sub: "Money against the order",
    heading: "Then the money side.",
    body: "Payments are one of the platform’s core workflows. They live in the same codebase as sales and reporting, so an order and what has been paid against it sit in one system.",
    modules: ["Payments", "Reporting", "Notifications"],
    next: { label: "Next: dispatch", target: "dispatch" },
  },
  {
    id: "dispatch",
    name: "Dispatch",
    sub: "Out for delivery",
    heading: "Then it leaves the building.",
    body: "Dispatch gets the order out for delivery. It works alongside inventory, background jobs, notifications and the platform’s mobile support.",
    modules: [
      "Dispatch",
      "Inventory",
      "Jobs",
      "Notifications",
      "Mobile workflows",
    ],
    next: { label: "See the full scope", target: "scope" },
  },
]

export const gndScope: GndScopeItem[] = [
  { label: "Dealer onboarding", steps: ["sales"] },
  { label: "Sales workflows", steps: ["sales"] },
  { label: "Print and PDF snapshots", steps: ["sales"] },
  { label: "Payments", steps: ["payments"] },
  { label: "Reporting", steps: ["payments"] },
  { label: "Notifications", steps: ["payments", "dispatch"] },
  { label: "Dispatch", steps: ["dispatch"] },
  { label: "Inventory", steps: ["dispatch"] },
  { label: "Jobs", steps: ["dispatch"] },
  { label: "Mobile workflows", steps: ["dispatch"] },
]

/** Track labels shared by the illustrative GND stages. */
export const gndTrack = ["Draft", "Confirmed", "Snapshot", "Payment", "Dispatch"]

export const illustrativeBar = {
  label: "Illustrative workflow",
  note: "Sample data, not a product screenshot",
}

export const salesStage: IllustrativeStage<SalesStageData> = {
  ariaLabel:
    "Illustrative workflow with sample data: sales order SO-1042 for a sample dealer, confirmed, with four line items and a PDF snapshot.",
  head: {
    crumb: "Sales · Orders",
    title: "SO-1042",
    sub: "Harbor Trim Supply · dealer",
    tag: "Confirmed",
  },
  track: ["done", "done", "now", "todo", "todo"],
  data: {
    items: [
      { label: "Shaker interior door, 30 × 80", qty: 6 },
      { label: "Door casing, primed, 16 ft", qty: 14 },
      { label: "Base moulding, 3¼ in, 16 ft", qty: 22 },
      { label: "Passage hardware set", qty: 6 },
    ],
    totalLabel: "Items on order",
    total: 48,
    snapshotCaption: "PDF snapshot",
  },
}

export const paymentsStage: IllustrativeStage<PaymentsStageData> = {
  ariaLabel:
    "Illustrative workflow with sample data: payments on order SO-1042, one payment recorded, a balance remaining, and the dealer notified.",
  head: {
    crumb: "Sales · Orders · SO-1042",
    title: "Payments",
    sub: "Harbor Trim Supply · dealer",
    tag: "Part paid",
  },
  track: ["done", "done", "done", "now", "todo"],
  data: {
    entries: [
      { label: "Order total", detail: "48 items", amount: "4,860.00" },
      { label: "Payment recorded", detail: "Bank transfer", amount: "−2,000.00" },
    ],
    balanceLabel: "Balance on order",
    balance: "2,860.00",
    notice: "Dealer notified: payment recorded on SO-1042",
  },
}

export const dispatchStage: IllustrativeStage<DispatchStageData> = {
  ariaLabel:
    "Illustrative workflow with sample data: a delivery run of three stops with SO-1042 out for delivery, inventory updated, and a mobile view awaiting delivery confirmation.",
  head: {
    crumb: "Dispatch",
    title: "Delivery run",
    sub: "3 stops · 92 items",
    tag: "Out for delivery",
  },
  track: ["done", "done", "done", "done", "now"],
  data: {
    stops: [
      {
        order: "SO-1042",
        detail: "Harbor Trim Supply · 48 items",
        state: "En route",
        current: true,
      },
      { order: "SO-1039", detail: "Sample dealer · 30 items", state: "Loaded" },
      { order: "SO-1036", detail: "Sample dealer · 14 items", state: "Loaded" },
    ],
    phone: {
      position: "Stop 1 of 3",
      order: "SO-1042",
      lines: ["Harbor Trim Supply", "48 items"],
      state: "Awaiting confirmation",
    },
    notice: "Inventory updated for 48 items on SO-1042",
  },
}

/* afterservice: independent product, separate from the open-source labs */

export const afterservice: IndependentProduct = {
  name: "afterservice",
  label: "Independent product",
  audience: "Follow-up software for local service businesses",
  link: { label: "afterservice.app", href: "https://afterservice.app" },
  cta: "Explore afterservice",
  workflowLabel: "How afterservice works",
  workflow: [
    { name: "Customer", sub: "Recorded once" },
    { name: "Completed job", sub: "The service done" },
    { name: "Follow-up", sub: "Scheduled, then worked" },
    { name: "Outcome", sub: "Reply logged, loop closed" },
  ],
  heading: "The work after the job is done.",
  description:
    "Follow-up software for local service businesses, with customers, completed jobs, follow-up boards, templates and contact history in one workspace.",
  loop: "An operator records a customer and the completed job, schedules a follow-up, works it from the board, then logs the contact, the reply and the outcome until the loop is closed.",
  modulesLabel: "Inside the workspace",
  modules: [
    "Customers",
    "Completed service jobs",
    "Follow-up board",
    "Templates",
    "Contact history",
    "Replies and outcomes",
  ],
  comingSoon: "AI assistant and WhatsApp: coming soon",
  stack:
    "A Next.js website and dashboard on a Hono and tRPC API, with Prisma and Postgres underneath, organised around workspaces, background jobs and plans.",
  stage: {
    ariaLabel:
      "Illustrative workflow with sample data: a sample customer’s completed service job, a check-in follow-up worked from the board, a logged call, the customer’s reply, and the outcome recorded as resolved.",
    head: {
      crumb: "Follow-ups",
      title: "Check-in after service",
      sub: "Sample customer · AC service visit",
      tag: "Resolved",
    },
    track: ["done", "done", "done", "now"],
    log: [
      { day: "Day 0", title: "Job completed", detail: "AC service · 2 units" },
      {
        day: "Day 7",
        title: "Follow-up worked",
        detail: "Check-in template · call logged",
      },
      {
        day: "Day 8",
        title: "Customer replied",
        detail: "Cooling fine, asked about filters",
      },
      {
        day: "Day 8",
        title: "Outcome recorded",
        detail: "Resolved · loop closed",
        current: true,
      },
    ],
    boardCaption: "Follow-up board",
    notice: "Contact history kept with the customer and the job",
  },
}

/* Open-source product labs */

export const labsIntro = {
  title: "Four product labs, built in the open.",
  body: "Open-source products where I work through other kinds of operations: schools, property, cooperative finance and commerce. All four are under development; EwaTrade is the earliest.",
  mapLabel: "Illustrative scope map",
}

export const labStatusLabel = {
  development: "Under development",
  early: "Early stage",
} as const

export const labs: ProductLab[] = [
  {
    id: "lab-sc",
    name: "SchoolClerk",
    status: "development",
    type: "Open-source product lab · school operations",
    description:
      "Multi-tenant school operations SaaS under development for academic structure, finance, student records, tenant websites, notifications, and shared dashboard workflows.",
    link: { label: "school-clerk.com", href: "https://school-clerk.com" },
    layout: "wide",
    chain: ["School tenant", "Tenant website", "Shared dashboard"],
    set: ["Academic structure", "Student records", "Finance", "Notifications"],
  },
  {
    id: "lab-pk",
    name: "PlotKeys",
    status: "development",
    type: "Open-source product lab · real estate",
    description:
      "Multi-tenant real-estate operations and website-generation platform exploring property models, tenant onboarding, customer portal foundations, domains, and section templates.",
    link: { label: "plotkeys.com", href: "https://plotkeys.com" },
    layout: "narrow",
    chain: ["Tenant onboarding", "Property models", "Generated website"],
    set: ["Section templates", "Domains", "Customer portal foundations"],
  },
  {
    id: "lab-hv",
    name: "HalaalVest",
    status: "development",
    type: "Open-source product lab · cooperative finance",
    description:
      "Halal cooperative finance platform under development with member onboarding, contributions, loan and repayment workflows, ledgers, charges, imports, and reporting foundations.",
    link: { label: "halaalvest.com", href: "https://halaalvest.com" },
    layout: "narrow",
    chain: ["Member onboarding", "Contributions", "Loans", "Repayments"],
    set: ["Ledgers", "Charges", "Imports", "Reporting foundations"],
  },
  {
    id: "lab-ew",
    name: "EwaTrade",
    status: "early",
    type: "Open-source product lab · commerce and logistics",
    description:
      "Early-stage commerce and logistics platform with storefront, dashboard, POS, fulfillment, messaging, jobs, notifications, email, and database workflow foundations.",
    link: { label: "ewatrade.com", href: "https://ewatrade.com" },
    layout: "wide",
    chain: ["Storefront and POS", "Fulfillment", "Messaging"],
    set: ["Dashboard", "Jobs", "Notifications", "Email", "Database workflows"],
  },
]

/* About and contact */

export const about = {
  title: "Self-taught, and most at home close to operations.",
  paragraphs: [
    "I’ve been programming for more than twelve years, all of it self-taught. For nearly five of them I’ve focused on Next.js, React, TypeScript, Node.js and modern full-stack product systems.",
    "Most of my work sits close to real operations: sales workflows, order systems, customer portals, dashboards, payments, print and PDF flows, notifications, jobs, and business-specific tooling.",
    "I work remotely and I’m open to relocation across the Middle East.",
  ],
}

export const toolGroups: ToolGroup[] = [
  { label: "Web", tools: "Next.js, React, TypeScript, Node.js" },
  { label: "Also", tools: "Laravel, Vue.js" },
  { label: "Mobile", tools: "React Native, Expo" },
  { label: "Tooling", tools: "Prisma-style workflows, Bun, Turbo, Vercel" },
]

export const contact = {
  title: "Hiring, or need an operations platform built?",
  body: "I’m open to remote senior product engineering roles and to relocation across the Middle East. Send a note about the role or the system you need.",
  footLine: "Ishaq Yusuf · Senior Full-Stack Product Engineer · Remote",
}
