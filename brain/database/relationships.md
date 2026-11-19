# Database Relationships

## Purpose
Tracks database relationships.

## Current State
- `posts` has many `post_tags`.
- `tags` has many `post_tags`.
- `post_tags` belongs to one `posts` row and one `tags` row.
