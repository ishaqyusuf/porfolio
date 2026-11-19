# Simple Portfolio

## Purpose

Tracks the one-page portfolio homepage.

## Goal

Present Ishaq Yusuf through real work using the approved "Product showcase" design (Workshop revision `a56499bd-43aa-4ebd-8d45-36bbe89668ef`). This supersedes the earlier minimal Oruc-inspired homepage; the blog keeps `SiteShell` and the light/dark theme.

## UI

- Own sticky header: name, role, Work, About, Blog (`/blog`), Contact, CV. Two rows below 520px so every link fits.
- Hero headline and lede with Email and CV actions.
- GND Millwork (`#work`): Sales / Payments / Dispatch ARIA tabs with Next buttons, illustrative sample-data stages and a full-scope disclosure that highlights the current step.
- afterservice (`#afterservice`): independent product feature with a Customer → Completed job → Follow-up → Outcome flow and an illustrative contact log. Separate from the open-source labs.
- Four open-source product labs (`#labs`): SchoolClerk, PlotKeys, HalaalVest, EwaTrade.
- About (`#about`) with tool groups.
- Amber contact footer (`#contact`) with email, CV, GitHub, LinkedIn.

## Implementation

- `app/page.tsx` composes server components from `components/showcase/`.
- `components/showcase/gnd-workflow.tsx` is the only client component (tabs, keyboard, Next buttons, scope disclosure). Stages render on the server and are passed in as props.
- Fonts: local Cal Sans and Inter via `next/font/local` in `components/showcase/fonts.ts`.
- Styling: tokens and selectors scoped to `.showcase` in `app/globals.css`. The homepage is always dark regardless of saved blog theme.
- Product truth and design tokens: `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`.

## Data

- Static content and illustrative sample data in `lib/portfolio/content.ts`; types in `lib/portfolio/types.ts`.
- `profile` stays exported for `SiteShell`.
- CV link points to the public Google Docs resume.

## Content Rules

- GND is the primary professional proof. Labs are under development; EwaTrade is early stage.
- afterservice: "Independent product", private, `https://afterservice.app`. AI assistant and WhatsApp are coming soon only. Never call it open source, warranty registration or automatic messaging; no pricing, traction or customer counts.
- All product surfaces are labelled illustrative sample data.

## Future Improvements

- Add public resume file.
- Add social preview image.
