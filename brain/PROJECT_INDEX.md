# Project Index

## Purpose
Quick map of important project files.

## App
- `app/page.tsx`: one-page portfolio route.
- `app/blog/page.tsx`: public blog index route.
- `app/blog/[slug]/page.tsx`: public blog detail route with markdown rendering.
- `app/layout.tsx`: root layout, fonts, metadata, theme provider.
- `app/globals.css`: Tailwind import, theme tokens, base styles.

## Portfolio
- `lib/portfolio/content.ts`: profile copy, links, selected work, stack.
- `lib/env.ts`: environment access.
- `components/portfolio/`: portfolio-specific presentation components.

## Database
- `lib/db/schema.ts`: Drizzle SQLite schema for blog posts and tags.
- `lib/db/index.ts`: lazy libSQL Drizzle client.
- `lib/db/blog.ts`: public blog query helpers.
- `scripts/seed-blog.ts`: idempotent starter blog seed.

## Documentation
- `brain/`: project memory, architecture notes, tasks, and AI workflow rules.
