# Architecture

## Purpose
Tracks application architecture and boundaries.

## Current Architecture
- App Router page composes portfolio sections.
- Content is separated into `lib/portfolio/content.ts`.
- Environment access is centralized in `lib/env.ts`.
- Blog content is stored in SQLite through Drizzle ORM and read from Server Components.
- Database access uses a lazy libSQL client from `lib/db/`.
- Portfolio UI components live in `components/portfolio/`.
- shadcn-style primitives remain in `components/ui/`.
