# Design: Ink exhibit

Approved Workshop revision `9e7e040f-2dca-4b9a-b342-89a1292aa300` ("02 · Ink exhibit"), which supersedes "02 · Product showcase" (`a56499bd`). Port it faithfully; do not reinterpret.

## World

A dark product exhibition with adamspro.dev-level structure: floating pill nav, numbered section kickers, projects shown inside browser frames and a phone, an amber contact band. Deep ink canvas, warm off-white type, one amber signal colour. The homepage has light (warm paper) and dark (ink) themes shared with the blog through next-themes: it follows the system theme until the visitor uses the header toggle (sun/moon, beside Hire me; also the `d` key), then the choice persists in localStorage. In light, `--signal` deepens to `#8F5A00` for text/strokes/focus (≈5:1 on the canvas) while `--signal-fill` keeps amber surfaces at `#F2B33D`.

## Tokens (scoped to `.showcase` in `app/globals.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--canvas` | `#0E1116` | Page and app surfaces |
| `--field` | `#161B22` | Project cards, pill, lab fields |
| `--field-2` | `#1D232C` | Selected step, notices, chips |
| `--line` | `#2B323D` | Rules and borders |
| `--line-2` | `#3A424F` | Stronger borders, scrollbar |
| `--text` | `#EEEAE2` | Primary text (warm off-white) |
| `--text-2` | `#AAB0B9` | Secondary text |
| `--text-3` | `#8A919C` | Labels and captions |
| `--signal` | `#F2B33D` | Amber: focus, selection, current state, contact band |
| `--signal-hover` | `#F7C766` | Amber button hover |
| `--signal-ink` | `#1A1408` | Text on amber |
| `--signal-done` | `#8C6A2A` | Completed track steps |
| `--signal-soft` / `--signal-line` | amber at 14% / 45% | Focus halo, dashed states |
| `--ink-2` / `--ink-line` | ink at 74% / 22% | Secondary text and rules on amber |
| `--sheet` | `#F3EFE6` | Paper snapshot, CV card |
| `--bezel` | `#090B0F` | Phone bezel |
| `--wrap` | `1312px` | Content width |
| `--gutter` | `clamp(20px, 4.5vw, 64px)`, `16px` at ≤420 | Side padding |
| `--r-lg` / `--r-md` / `--r-sm` | `16px` / `12px` / `8px` | Cards / steps and frames / icons |
| `--ease` | `cubic-bezier(.16, 1, .3, 1)` | All motion |

## Type

- Display: **Cal Sans** 600 (`public/fonts/cal-sans.woff2`, `next/font/local`, `--showcase-font-display`). Hero `clamp(2.625rem, 1.2rem + 4.6vw, 4.75rem)`, line-height 1, tracking -0.025em. Section heads `clamp(2.25rem, 1.4rem + 3vw, 4rem)`.
- Body: **Inter** variable 100–900 (`public/fonts/inter.woff2`, `--showcase-font-sans`), 17px / 1.6 (16px at ≤640), features `cv11`, `ss01`.
- Mono: system stack (`ui-monospace, "SF Mono", Menlo, monospace`) for kickers, metadata, tags and captions.

## Structure

1. **Header** (`nav-shell` → `pill`): IY mark + name, Work · Stack · Experience · About · Contact · Blog, "Open to remote" status, Hire me. Below 960px the links collapse into a menu button and sheet.
2. **Hero:** mono kicker, headline, lede, 2×2 capability grid, actions (Step through an order, Hire me, Read the CV), location + email; right side an IY monogram plate with orbiting stack chips.
3. **Ticker:** mono project row (name · domain), horizontally scrollable on phones.
4. **01 Selected work:** GND exhibit (meta chips, Sales/Payments/Dispatch stepper, browser-framed illustrative app, phone for dispatch, full-scope disclosure) and afterservice (static 4-step flow, copy, browser-framed contact log and board, stack footer).
5. **02 Product labs:** 12-column grid alternating 7/5 and 5/7.
6. **03 Capabilities:** six groups in a hairline grid.
7. **04 Experience:** undated roles, listed by responsibility.
8. **05 About:** identity card, CV card, three paragraphs.
9. **06 Contact:** full-bleed amber band, preview-only form beside email (Copy / Open mail), GitHub, LinkedIn, CV.

Breakpoints: 1100 (stack exhibits and panels; hide the nav status text), 960 (menu button, single-column hero), 860 (stack heads), 640 (compact steps, scrolling ticker), 480, 420 (16px gutter, hide Hire me in the pill). Review at 1440×900 and 390×844; hold at 320 with no horizontal overflow.

## Header behaviour

- **At the top** the nav blends into the canvas: no fill, border or shadow, its content aligned to the content edges (mark with the hero text, Hire me / menu button with the right edge).
- **After about 12px of scroll** it becomes the floating pill: content insets to `8px 8px 8px 10px`, and a separate `::before` layer (field fill, hairline border, soft shadow, 999px radius) fades in and settles from `scale(.97, .82)` to full size. 450ms, `--ease`; reverses on the way back up. Only opacity, transform and the small padding shift animate.
- `SiteHeader` reads `scrollY > 12` through `useSyncExternalStore` (server snapshot = flush, so hydration never mismatches) and writes `data-scrolled`. Transitions are gated on `data-ready`, set two frames after mount, so a reload mid-page shows the pill without animating into it. Before hydration a scroll-driven animation (`animation-timeline: scroll(root)`, where supported) keeps the flush nav from painting over content.
- Reduced motion switches instantly. The mobile menu and sheet work in both states.

## Components

- **Steps tablist:** ARIA tabs with Arrow/Home/End, amber border on the selected step, a rail showing progress, Next buttons in each panel.
- **Browser frame:** traffic lights, URL pill, Visit site, an "Illustrative · sample data, not a product screenshot" strip, then the illustrative app (sidebar, crumb, title, tag, track, content, amber notice).
- **Scope disclosure:** button with `aria-expanded`; modules for the selected step get an amber marker.
- **Lab card:** status ring (half-filled = under development, open = early stage), amber-joined chain of chips, module set.
- **Contact:** preview-only form (validates locally, echoes the note as text, never sends), Copy email with clipboard fallback and live status.

## Motion

Header reveal (above), a 420ms panel entrance after a step is chosen, and short hover transitions. Smooth scrolling, transitions and animations are disabled under `prefers-reduced-motion`.
