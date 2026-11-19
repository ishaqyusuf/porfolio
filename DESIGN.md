# Design: Product showcase

Approved Workshop revision `a56499bd-43aa-4ebd-8d45-36bbe89668ef` ("02 · Product showcase"). Port it faithfully; do not reinterpret.

## World

A dark product exhibition. Deep ink canvas, warm off-white type, one amber signal colour. Work is shown as large, asymmetric fields with detailed illustrative product surfaces. The homepage is always dark, independent of the blog's light/dark theme.

## Tokens (scoped to `.showcase` in `app/globals.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--canvas` | `#0E1116` | Page and app surfaces |
| `--field` | `#161B22` | Stage frames, lab fields |
| `--field-2` | `#1D232C` | Selected step, notices, chips |
| `--line` | `#2B323D` | Rules and borders |
| `--line-2` | `#3A424F` | Stronger borders, scrollbar |
| `--text` | `#EEEAE2` | Primary text (warm off-white) |
| `--text-2` | `#AAB0B9` | Secondary text |
| `--text-3` | `#8A919C` | Labels and captions |
| `--signal` | `#F2B33D` | Amber: focus, selection, current state, contact field |
| `--signal-hover` | `#F7C766` | Amber button hover |
| `--signal-ink` | `#1A1408` | Text on amber |
| `--signal-done` | `#8C6A2A` | Completed track steps |
| `--sheet` | `#F3EFE6` | Paper snapshot |
| `--wrap` | `1312px` | Content width |
| `--gutter` | `clamp(20px, 4.5vw, 64px)` | Side padding |
| `--ease` | `cubic-bezier(.16, 1, .3, 1)` | All motion |

## Type

- Display: **Cal Sans** 600 (`public/fonts/cal-sans.woff2`, via `next/font/local`). Headline `clamp(2.75rem, 1.1rem + 5.4vw, 5.5rem)`, line-height 1, tracking -0.02em.
- Body: **Inter** variable 100–900 (`public/fonts/inter.woff2`), 17px / 1.6, features `cv11`, `ss01`. Tabular numerals in data.

## Layout

- Asymmetric grids: hero 7/5, exhibit head 5/7, panel 4/8, labs 7/5 alternating with 5/7.
- Breakpoints: 1100 (stack exhibit and panels), 860 (stack heads, hide role), 640 (compact steps, hide sheet/phone/board, hide CV in nav), 520 (two-row header so Blog fits), 400 (tighter steps).
- Primary review viewports: 1440×960 and 390×844; must hold at 320 with no horizontal overflow.

## Components

- **Steps tablist:** ARIA tabs, Arrow/Home/End keys, amber border on selected.
- **Stage:** field frame → canvas app with crumb, title, tag, 5-step track, table / stops / sheet / phone / board, amber notice.
- **Scope disclosure:** button with `aria-expanded`; current-step modules get an amber marker.
- **Lab field:** status ring (half-filled = under development, open = early stage), chain of amber-joined chips, module set.
- **Contact:** full-bleed amber field; links invert to ink on hover for contrast.

## Motion

One authored moment: a 420ms ease-out panel entrance after a step is chosen. Smooth scrolling and all transitions are disabled under `prefers-reduced-motion`.
