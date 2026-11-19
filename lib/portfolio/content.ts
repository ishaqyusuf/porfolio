import type {
  AfterserviceStage,
  CapabilityGroup,
  ContactChannel,
  DispatchStage,
  ExternalLink,
  Fact,
  GndScopeItem,
  GndStep,
  HeroCapability,
  NavItem,
  OrbitChip,
  PaymentsStage,
  ProductLab,
  ProjectMeta,
  Role,
  SalesStage,
  SectionIntro,
  TickerItem,
} from "@/lib/portfolio/types"

export const profile = {
  name: "Ishaq Yusuf",
  initials: "IY",
  role: "Senior Full-Stack Product Engineer",
  location: "Remote; open to relocation across the Middle East",
  email: "ishaqyusuf024@gmail.com",
}

export const links = {
  email: { label: profile.email, href: `mailto:${profile.email}` },
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

/** Accessible name for a project's stack tag list. */
export const tagsLabel = "Stack"

/** Shared caption for every illustrative product surface. */
export const illustrative = {
  label: "Illustrative",
  note: "sample data, not a product screenshot",
  visit: "Visit site",
}

/* Header */

export const nav = {
  label: "Primary",
  items: [
    { label: "Work", href: "#work", spy: "work", number: "01" },
    { label: "Stack", href: "#stack", spy: "stack", number: "03" },
    { label: "Experience", href: "#roles", spy: "roles", number: "04" },
    { label: "About", href: "#about", spy: "about", number: "05" },
    { label: "Contact", href: "#contact", spy: "contact", number: "06" },
  ] satisfies NavItem[],
  blog: { label: "Blog", href: "/blog" },
  hire: { label: "Hire me", href: "#contact" },
  availability: "Open to remote",
  availabilityLong: "Open to remote · relocation across the Middle East",
  sheetLabel: "Sections",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  skip: { label: "Skip to work", href: "#work" },
}

/* Hero */

export const hero = {
  kicker: ["Senior full-stack product engineer", "12+ years programming"],
  title: "I build the software behind everyday business.",
  ledeLead: "From a dealer’s first order to the delivery.",
  lede: "I’m Ishaq Yusuf, a senior full-stack product engineer and lead developer of GND Millwork’s operations platform. Step through an order in it below.",
  capabilitiesLabel: "What I build",
  capabilities: [
    {
      icon: "layers",
      title: "Operations platforms",
      sub: "Sales, payments, dispatch",
    },
    {
      icon: "layout",
      title: "Portals and dashboards",
      sub: "Next.js, React, TypeScript",
    },
    {
      icon: "doc",
      title: "Print and PDF flows",
      sub: "A fixed copy of the order",
    },
    {
      icon: "clock",
      title: "Jobs and notifications",
      sub: "Work that runs on its own",
    },
  ] satisfies HeroCapability[],
  primary: { label: "Step through an order", href: "#gnd" },
  cv: "Read the CV",
  where: "Remote · open to relocation across the Middle East",
  orbit: [
    { label: "Next.js", lead: true },
    { label: "React" },
    { label: "TypeScript", lead: true },
    { label: "Node.js" },
    { label: "Prisma" },
    { label: "Hono · tRPC" },
    { label: "Postgres" },
    { label: "Expo" },
  ] satisfies OrbitChip[],
}

export const ticker = {
  label: "Projects",
  items: [
    { name: "GND Millwork", domain: "gndprodesk.com", href: "#gnd" },
    { name: "afterservice", domain: "afterservice.app", href: "#afterservice" },
    { name: "SchoolClerk", domain: "school-clerk.com", href: "#lab-sc" },
    { name: "PlotKeys", domain: "plotkeys.com", href: "#lab-pk" },
    { name: "HalaalVest", domain: "halaalvest.com", href: "#lab-hv" },
    { name: "EwaTrade", domain: "ewatrade.com", href: "#lab-ew" },
  ] satisfies TickerItem[],
}

/* 01 Selected work */

export const workIntro: SectionIntro = {
  number: "01",
  kicker: "Selected work",
  title: "Work that sits close to real operations.",
  body: "My strongest recent work is GND, a large TypeScript/Next.js monorepo for business operations. Alongside it I build afterservice, an independent product for local service businesses.",
}

/* GND Millwork: primary professional proof */

export const gnd = {
  meta: {
    number: "01 / 06",
    status: "Client platform",
    role: "Lead developer",
    name: "GND Millwork",
    line: "A client operations platform covering dealer onboarding, sales workflows, payments, dispatch, inventory, notifications, jobs, PDF/print systems, reporting and mobile support.",
  } satisfies ProjectMeta,
  tags: ["TypeScript", "Next.js", "Monorepo"],
  link: { label: "gndprodesk.com", href: "https://gndprodesk.com" },
  appName: "GND",
  appNav: ["Sales", "Payments", "Dispatch", "Inventory", "Reporting", "Jobs"],
  track: ["Draft", "Confirmed", "Snapshot", "Payment", "Dispatch"],
  tablistLabel: "Order workflow in GND",
  keyHint: "Arrow keys switch steps",
  modulesLabel: "Parts of GND in this step",
  scopeIntro:
    "One large TypeScript and Next.js monorepo carries all of this, plus reporting and mobile support.",
  scopeOpen: "Open the full GND scope",
  scopeClose: "Close the full GND scope",
  scopeLabel: "Full GND scope",
  scopeFoot: "Bespoke business operations platform · I’m the lead developer",
  scopeCurrent: {
    prefix: "Highlighted:",
    suffix: "the step selected above",
  },
}

export const gndSteps: GndStep[] = [
  {
    id: "sales",
    name: "Sales",
    sub: "Dealer and order",
    heading: "It starts with a dealer.",
    body: "Dealers are onboarded into the platform, and their orders move through GND’s sales workflows. An order can be captured as a print or PDF snapshot, so there is a fixed copy to work from.",
    modules: [
      "Dealer onboarding",
      "Sales workflows",
      "Print and PDF snapshots",
    ],
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

export const salesStage: SalesStage = {
  ariaLabel:
    "Illustrative workflow with sample data: sales order SO-1042 for a sample dealer, confirmed, with four line items and a PDF snapshot.",
  nav: "Sales",
  head: {
    crumb: "Sales · Orders",
    title: "SO-1042",
    sub: "Harbor Trim Supply · dealer",
    tag: "Confirmed",
  },
  track: ["done", "done", "now", "todo", "todo"],
  columns: ["Item", "Qty"],
  items: [
    { label: "Shaker interior door, 30 × 80", qty: 6 },
    { label: "Door casing, primed, 16 ft", qty: 14 },
    { label: "Base moulding, 3¼ in, 16 ft", qty: 22 },
    { label: "Passage hardware set", qty: 6 },
  ],
  totalLabel: "Items on order",
  total: 48,
  snapshotCaption: "PDF snapshot",
}

export const paymentsStage: PaymentsStage = {
  ariaLabel:
    "Illustrative workflow with sample data: payments on order SO-1042, one payment recorded, a balance remaining, and the dealer notified.",
  nav: "Payments",
  head: {
    crumb: "Sales · Orders · SO-1042",
    title: "Payments",
    sub: "Harbor Trim Supply · dealer",
    tag: "Part paid",
  },
  track: ["done", "done", "done", "now", "todo"],
  columns: ["Entry", "Amount"],
  entries: [
    { label: "Order total", detail: "48 items", amount: "4,860.00" },
    { label: "Payment recorded", detail: "Bank transfer", amount: "−2,000.00" },
  ],
  balanceLabel: "Balance on order",
  balance: "2,860.00",
  paid: {
    recordedLabel: "Recorded",
    recorded: "2,000.00",
    balanceLabel: "Balance",
    share: 2000 / 4860,
  },
  notice: "Dealer notified: payment recorded on SO-1042",
}

export const dispatchStage: DispatchStage = {
  ariaLabel:
    "Illustrative workflow with sample data: a delivery run of three stops with SO-1042 out for delivery, inventory updated, and a mobile view awaiting delivery confirmation.",
  nav: "Dispatch",
  head: {
    crumb: "Dispatch",
    title: "Delivery run",
    sub: "3 stops · 92 items",
    tag: "Out for delivery",
  },
  track: ["done", "done", "done", "done", "now"],
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
  notice: "Inventory updated for 48 items on SO-1042",
  phone: {
    ariaLabel:
      "Illustrative mobile view with sample data: stop 1 of 3, order SO-1042 for Harbor Trim Supply, 48 items, awaiting delivery confirmation.",
    title: "Dispatch",
    position: "Stop 1 of 3",
    order: "SO-1042",
    lines: ["Harbor Trim Supply", "48 items"],
    state: "Awaiting confirmation",
  },
}

/* afterservice: independent product, separate from the open-source labs */

export const afterservice = {
  meta: {
    number: "02 / 06",
    status: "Independent product",
    role: "Builder",
    name: "afterservice",
    line: "Follow-up software for local service businesses. A private product, built and run independently.",
  } satisfies ProjectMeta,
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
  comingSoon: { badge: "Coming soon", text: "AI assistant and WhatsApp" },
  stack:
    "A Next.js website and dashboard on a Hono and tRPC API, with Prisma and Postgres underneath, organised around workspaces, background jobs and plans.",
  tags: ["Next.js", "Hono", "tRPC", "Prisma", "Postgres"],
  appNav: ["Customers", "Jobs", "Follow-ups", "Templates", "History"],
  stage: {
    ariaLabel:
      "Illustrative workflow with sample data: a sample customer’s completed service job, a check-in follow-up worked from the board, a logged call, the customer’s reply, and the outcome recorded as resolved.",
    nav: "Follow-ups",
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
    board: {
      caption: "Follow-up board",
      card: "Check-in after service",
      state: "Resolved",
    },
    notice: "Contact history kept with the customer and the job",
  } satisfies AfterserviceStage,
}

/* 02 Open-source product labs */

export const labsIntro: SectionIntro = {
  number: "02",
  kicker: "Product labs",
  title: "Four product labs, built in the open.",
  body: "Open-source products where I work through other kinds of operations: schools, property, cooperative finance and commerce. All four are under development; EwaTrade is the earliest.",
}

export const labMapLabel = "Illustrative scope map"

export const labStatusLabel = {
  development: "Under development",
  early: "Early stage",
} as const

export const labs: ProductLab[] = [
  {
    id: "lab-sc",
    number: "03 / 06",
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
    number: "04 / 06",
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
    number: "05 / 06",
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
    number: "06 / 06",
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

/* 03 Capabilities */

export const stackIntro: SectionIntro = {
  number: "03",
  kicker: "Capabilities",
  title: "What I build, and what I build it with.",
  body: "Nearly five years focused on Next.js, React, TypeScript and Node.js, on top of more than twelve years of programming.",
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    key: "A",
    title: "Operations platforms",
    body: "Systems that sit close to how a business runs, from the first order to the delivery.",
    tags: [
      "Sales workflows",
      "Order systems",
      "Payments",
      "Dispatch",
      "Inventory",
      "Reporting",
    ],
  },
  {
    key: "B",
    title: "Full-stack web",
    body: "Customer portals, dashboards and product websites.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    key: "C",
    title: "APIs and data",
    body: "Typed APIs over a relational database, as in afterservice.",
    tags: ["Hono", "tRPC", "Prisma", "Postgres"],
  },
  {
    key: "D",
    title: "Mobile",
    body: "Mobile workflows that work alongside the platform, like GND’s dispatch.",
    tags: ["React Native", "Expo", "Mobile workflows"],
  },
  {
    key: "E",
    title: "Documents and background work",
    body: "The parts that run after someone clicks: snapshots, messages and jobs.",
    tags: ["Print and PDF flows", "Notifications", "Jobs"],
  },
  {
    key: "F",
    title: "Also, and tooling",
    body: "Other stacks I work in, and the build chain around them.",
    tags: ["Laravel", "Vue.js", "Bun", "Turbo", "Vercel"],
  },
]

/* 04 Experience: undated, listed by responsibility */

export const rolesIntro: SectionIntro = {
  number: "04",
  kicker: "Experience",
  title: "The roles I hold, by what I own.",
  body: "Each one is ongoing work, listed by responsibility.",
}

export const skillsLabel = "Skills"

export const roles: Role[] = [
  {
    side: "Client engagement",
    title: "Lead developer",
    org: "GND Millwork",
    body: "Lead developer of a bespoke business operations platform: one large TypeScript and Next.js monorepo covering dealer onboarding, sales workflows, payments, dispatch, inventory, notifications, jobs, PDF/print systems, reporting and mobile support.",
    skills:
      "TypeScript, Next.js, monorepo, print and PDF, jobs, notifications, mobile workflows",
    link: { label: "See the exhibit", href: "#gnd", direction: "up" },
  },
  {
    side: "Independent product",
    title: "Builder",
    org: "afterservice",
    body: "Building follow-up software for local service businesses: a Next.js website and dashboard on a Hono and tRPC API, with Prisma and Postgres underneath, organised around workspaces, background jobs and plans.",
    skills: "Next.js, Hono, tRPC, Prisma, Postgres, background jobs",
    link: { label: "See the product", href: "#afterservice", direction: "up" },
  },
  {
    side: "Open source",
    title: "Maintainer",
    org: "Open-source product labs",
    body: "SchoolClerk, PlotKeys, HalaalVest and EwaTrade: open-source products for schools, property, cooperative finance and commerce. All four are under development; EwaTrade is the earliest.",
    skills: "multi-tenant SaaS, tenant websites, ledgers, storefront and POS",
    link: { label: "See the labs", href: "#labs", direction: "up" },
  },
  {
    side: "12+ years",
    title: "Programmer",
    org: "Self-taught",
    body: "More than twelve years of programming, all of it self-taught, with nearly five focused on Next.js, React, TypeScript, Node.js and modern full-stack product systems.",
    skills:
      "Next.js, React, TypeScript, Node.js, Laravel, Vue.js, React Native, Expo",
    link: { label: "About me", href: "#about", direction: "down" },
  },
]

/* 05 About */

export const about = {
  number: "05",
  kicker: "About",
  title: "Self-taught, and most at home close to operations.",
  paragraphs: [
    "I’ve been programming for more than twelve years, all of it self-taught. For nearly five of them I’ve focused on Next.js, React, TypeScript, Node.js and modern full-stack product systems.",
    "Most of my work sits close to real operations: sales workflows, order systems, customer portals, dashboards, payments, print and PDF flows, notifications, jobs, and business-specific tooling.",
    "I work remotely and I’m open to relocation across the Middle East.",
  ],
  facts: [
    { label: "Location", value: profile.location },
    { label: "Background", value: "Self-taught · 12+ years programming" },
    { label: "Focus", value: "Next.js, React, TypeScript, Node.js" },
  ] satisfies Fact[],
  emailLabel: "Email",
  elsewhereLabel: "Elsewhere",
  cvCard: { title: "Read the CV", note: "Google Doc · opens in a new tab" },
}

/* 06 Contact */

export const contact = {
  number: "06",
  kicker: "Contact",
  title: "Hiring, or need an operations platform built?",
  body: "I’m open to remote senior product engineering roles and to relocation across the Middle East. Send a note about the role or the system you need.",
  form: {
    title: "Send a note",
    badge: "Preview form",
    name: {
      label: "Name",
      placeholder: "Your name",
      error: "Add your name.",
    },
    email: {
      label: "Work email",
      placeholder: "you@company.com",
      error: "Add a work email, like you@company.com.",
    },
    message: {
      label: "What do you want to build?",
      placeholder:
        "The role, or the system you need: orders, payments, a customer portal…",
      error: "Say a little about the role or the system.",
    },
    submit: "Send",
    note: "Nothing is sent from this preview. Email reaches me directly.",
    sent: {
      title: "Preview only — nothing was sent",
      thanksPrefix: "Thanks,",
      thanksSuffix:
        "This form is a preview, so your note stayed in this browser:",
      reach: `To reach me, email ${profile.email}.`,
      again: "Write another note",
    },
  },
  channelsLabel: "Contact channels",
  email: {
    key: "Email · primary",
    copy: "Copy",
    copied: "Copied",
    openMail: "Open mail",
    copiedStatus: `Copied ${profile.email} to the clipboard.`,
    failedStatus:
      "Copy did not work here. Select the address above to copy it.",
  },
  channels: [
    {
      key: "GitHub",
      value: "github.com/ishaqyusuf",
      href: links.github.href,
      ariaLabel: "GitHub, opens in a new tab",
    },
    {
      key: "LinkedIn",
      value: "in/ishaq-yusuf",
      href: links.linkedin.href,
      ariaLabel: "LinkedIn, opens in a new tab",
    },
    {
      key: "CV",
      value: "Google Doc",
      href: links.cv.href,
      ariaLabel: "CV, opens in a new tab",
    },
  ] satisfies ContactChannel[],
  footLine: "Ishaq Yusuf · Senior Full-Stack Product Engineer · Remote",
  backToTop: "Back to top",
}
