# Blog System

## Purpose

Tracks the public DB-backed blog feature.

## Goal

Publish portfolio-relevant writing from SQLite/libSQL through Drizzle ORM without adding an admin surface in v1.

## UI

- `/blog` lists published posts newest-first.
- `/blog/[slug]` renders a published markdown post.
- Blog routes use the same restrained site shell and theme tokens as the portfolio.
- Missing or unpublished posts return 404.

## Data

- Blog posts are seeded through `scripts/seed-blog.ts`.
- Markdown is stored in `posts.body_markdown`.
- Tags are normalized in `tags` and connected through `post_tags`.
- Production should use a persistent libSQL/Turso-style `DATABASE_URL`.

## Future Improvements

- Add RSS.
- Add cover images or featured posts.
- Add a private admin editor if publishing needs move into the app.
