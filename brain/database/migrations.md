# Database Migrations

## Purpose
Tracks database migrations.

## Current State
- Drizzle migrations are generated into `drizzle/`.

## Commands
- `bun run db:generate`: generate SQL migrations from `lib/db/schema.ts`.
- `bun run db:migrate`: apply migrations to `DATABASE_URL` or `file:local.db`.
- `bun run db:seed`: seed starter blog posts and tags idempotently.
