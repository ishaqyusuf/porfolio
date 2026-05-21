# Repo Structure

## Purpose
Documents the current project structure.

## Structure
- `app/`: Next.js App Router files.
- `components/ui/`: shadcn-style UI primitives.
- `components/portfolio/`: portfolio-specific layout and display components.
- `lib/portfolio/content.ts`: all portfolio copy and link data.
- `lib/env.ts`: typed env access for `TEMPLATE`.
- `brain/`: project memory and implementation notes.

## Environment
- `.env.local`: local template value.
- `.env.production`: production template value.
- Required key: `TEMPLATE=oruc-inspired`.
