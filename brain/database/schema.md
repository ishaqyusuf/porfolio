# Database Schema

## Purpose
Tracks database schema.

## Current State
- SQLite/libSQL database accessed through Drizzle ORM.

## Tables
- `posts`: seeded blog posts with slug, title, excerpt, markdown body, status, publish date, timestamps, and SEO fields.
- `tags`: normalized blog tags with unique names and slugs.
- `post_tags`: many-to-many join table between posts and tags.

## Public Rules
- Public blog queries only return `posts.status = "published"`.
- Draft posts are not listed and detail routes return 404 for unpublished slugs.
