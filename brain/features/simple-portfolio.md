# Simple Portfolio

## Purpose

Tracks the one-page portfolio homepage.

## Goal

Present Ishaq Yusuf through real work using the approved "Ink exhibit" design (Workshop revision `9e7e040f-2dca-4b9a-b342-89a1292aa300`). This supersedes the "Product showcase" homepage (`a56499bd`); the blog keeps `SiteShell` and the light/dark theme.

## UI

- Sticky header (`SiteHeader`): IY mark and name, Work, Stack, Experience, About, Contact, Blog (`/blog`), "Open to remote" status and Hire me (`#contact`). Flush on the canvas at the top of the page; becomes a floating pill after ~12px of scroll. Below 960px the links move into a menu sheet (Escape and outside clicks close it; focus returns to the button). Section links mark the current section with `aria-current`.
- Skip link to `#work`.
- Hero: kicker, headline, lede, four capability items, actions (Step through an order → `#gnd`, Hire me, Read the CV), location and email, IY monogram plate with stack chips.
- Project ticker linking to every project.
- 01 Selected work (`#work`): GND Millwork (`#gnd`) with Sales / Payments / Dispatch ARIA tabs, browser-framed illustrative stages, a phone for dispatch and a full-scope disclosure that highlights the selected step; afterservice (`#afterservice`) with its four-step flow, illustrative contact log and stack.
- 02 Product labs (`#labs`): SchoolClerk, PlotKeys, HalaalVest, EwaTrade.
- 03 Capabilities (`#stack`), 04 Experience (`#roles`, undated), 05 About (`#about`, identity card and CV card).
- 06 Contact (`#contact`): amber band with a preview-only form, Copy email / Open mail, GitHub, LinkedIn, CV.

## Implementation

- `app/page.tsx` composes server components from `components/showcase/` and passes header copy into `SiteHeader`.
- Client components (kept small): `site-header.tsx` (scroll state, menu sheet, scroll spy), `gnd-workflow.tsx` (tabs, keyboard, Next buttons, scope disclosure; the illustrative visuals render on the server and arrive as props), `copy-email.tsx` (primary email channel), `contact-form.tsx` (preview-only form).
- Shared server pieces: `browser-frame.tsx` (frame, illustrative app shell, notices), `gnd-stages.tsx`, `project-heading.tsx` (meta row, tags), `section-intro.tsx` (numbered kickers), `icon.tsx`.
- Fonts: local Cal Sans and Inter via `next/font/local` in `components/showcase/fonts.ts`, exposed as CSS variables.
- Styling: tokens and selectors scoped to `.showcase` in `app/globals.css`, ported from the prototype. The homepage is always dark regardless of the saved blog theme.
- Product truth and design: `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`.

## Data

- All copy and illustrative sample data live in `lib/portfolio/content.ts`; types in `lib/portfolio/types.ts`.
- `profile` stays exported for `SiteShell` (name, email).
- CV link points to the public Google Docs resume.

## Content Rules

- GND is the primary professional proof. Labs are under development; EwaTrade is early stage.
- afterservice: "Independent product", private, `https://afterservice.app`. AI assistant and WhatsApp are coming soon only. Never call it open source, warranty registration or automatic messaging; no pricing, traction or customer counts.
- Experience stays undated; no invented employers, dates, awards or metrics.
- Every product surface carries "Illustrative · sample data, not a product screenshot".
- The contact form never sends anything: it shows "Preview only — nothing was sent" and echoes the note as plain text.

## Future Improvements

- Add public resume file.
- Add social preview image.
- Wire the contact form to a real endpoint if the owner wants one.
