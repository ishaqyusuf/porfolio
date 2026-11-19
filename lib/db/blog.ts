import { and, desc, eq, inArray } from "drizzle-orm"

import { getDb } from "@/lib/db"
import { posts, postTags, tags } from "@/lib/db/schema"

export type BlogTag = {
  name: string
  slug: string
}

export type BlogPostListItem = {
  id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: Date
  tags: BlogTag[]
}

export type BlogPost = BlogPostListItem & {
  bodyMarkdown: string
  seoTitle: string | null
  seoDescription: string | null
}

type PublishedPostRow = {
  id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: Date | null
  bodyMarkdown?: string
  seoTitle?: string | null
  seoDescription?: string | null
}

export async function getPublishedPosts(): Promise<BlogPostListItem[]> {
  const db = getDb()
  const rows = await db
    .select({
      id: posts.id,
      slug: posts.slug,
      title: posts.title,
      excerpt: posts.excerpt,
      publishedAt: posts.publishedAt,
    })
    .from(posts)
    .where(and(eq(posts.status, "published")))
    .orderBy(desc(posts.publishedAt))

  return attachTags(rows.filter(hasPublishedDate))
}

export async function getPublishedPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const db = getDb()
  const [post] = await db
    .select({
      id: posts.id,
      slug: posts.slug,
      title: posts.title,
      excerpt: posts.excerpt,
      bodyMarkdown: posts.bodyMarkdown,
      publishedAt: posts.publishedAt,
      seoTitle: posts.seoTitle,
      seoDescription: posts.seoDescription,
    })
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .limit(1)

  if (!post || !post.publishedAt) {
    return null
  }

  const [withTags] = await attachTags([post])

  return {
    ...withTags,
    bodyMarkdown: post.bodyMarkdown,
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
  }
}

async function attachTags<TPost extends PublishedPostRow>(
  postRows: TPost[],
): Promise<Array<TPost & { publishedAt: Date; tags: BlogTag[] }>> {
  if (postRows.length === 0) {
    return []
  }

  const tagsByPostId = await getTagsByPostId(postRows.map((post) => post.id))

  return postRows.map((post) => ({
    ...post,
    publishedAt: post.publishedAt as Date,
    tags: tagsByPostId.get(post.id) ?? [],
  }))
}

async function getTagsByPostId(postIds: string[]) {
  const db = getDb()
  const rows = await db
    .select({
      postId: postTags.postId,
      name: tags.name,
      slug: tags.slug,
    })
    .from(postTags)
    .innerJoin(tags, eq(postTags.tagId, tags.id))
    .where(inArray(postTags.postId, postIds))
    .orderBy(tags.name)

  return rows.reduce((map, row) => {
    const currentTags = map.get(row.postId) ?? []
    currentTags.push({ name: row.name, slug: row.slug })
    map.set(row.postId, currentTags)
    return map
  }, new Map<string, BlogTag[]>())
}

function hasPublishedDate(
  post: PublishedPostRow,
): post is PublishedPostRow & { publishedAt: Date } {
  return post.publishedAt instanceof Date
}
