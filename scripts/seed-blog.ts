import { eq } from "drizzle-orm"

import { getDb } from "@/lib/db"
import { posts, postTags, tags } from "@/lib/db/schema"

const seedPosts = [
  {
    slug: "building-close-to-operations",
    title: "Building close to operations",
    excerpt:
      "Why the strongest product engineering work often starts with the messy details of real workflows.",
    publishedAt: new Date("2026-05-01T09:00:00.000Z"),
    tags: ["Product Engineering", "Operations"],
    seoTitle: "Building close to operations | Ishaq Yusuf",
    seoDescription:
      "A short note on product engineering, operations, and building software around real workflows.",
    bodyMarkdown: `Software that sits close to operations has a different texture from software that only models a clean ideal.

The best systems I have worked on usually started with ordinary questions:

- Who needs to do the next thing?
- What information do they trust?
- Where does the handoff break?
- What has to be printable, auditable, or reversible?

That level of detail can look unglamorous from the outside, but it is where useful product engineering happens. The model, interface, background jobs, reporting, and permissions all become clearer when they are shaped around actual work instead of abstract screens.

For me, that is the interesting part: turning business-specific complexity into software that feels calm enough for people to use every day.`,
  },
  {
    slug: "portfolio-as-proof",
    title: "A portfolio should behave like proof",
    excerpt:
      "A compact portfolio is strongest when it explains judgment, scope, and the kind of work someone can own.",
    publishedAt: new Date("2026-05-08T09:00:00.000Z"),
    tags: ["Portfolio", "Career"],
    seoTitle: "A portfolio should behave like proof | Ishaq Yusuf",
    seoDescription:
      "A note on building a portfolio that communicates engineering judgment and product ownership.",
    bodyMarkdown: `A portfolio does not need to be loud to be useful.

For a senior product engineer, the important signal is not just a list of tools. It is the shape of responsibility:

- the systems you can reason about,
- the product tradeoffs you notice,
- the operational details you can absorb,
- and the quality bar you keep when nobody is handing you a perfect spec.

That is why I prefer a direct portfolio. It should make the strongest evidence easy to find, then get out of the way.`,
  },
  {
    slug: "database-backed-content",
    title: "Database-backed content without a CMS",
    excerpt:
      "For small sites, seeded database content can be a useful middle ground between static files and a full admin system.",
    publishedAt: new Date("2026-05-15T09:00:00.000Z"),
    tags: ["Next.js", "SQLite", "Drizzle"],
    seoTitle: "Database-backed content without a CMS | Ishaq Yusuf",
    seoDescription:
      "A note on using seeded SQLite content for a small Next.js portfolio blog.",
    bodyMarkdown: `Not every blog needs an admin dashboard on day one.

For a small portfolio, seeded database content gives you a practical middle ground:

- the public app reads from a real schema,
- migrations stay explicit,
- production can use a persistent SQLite-compatible service,
- and an editor UI can be added later without changing the public routes.

That keeps v1 small while avoiding a throwaway content model.`,
  },
]

const db = getDb()

for (const post of seedPosts) {
  const postId = `post_${post.slug}`

  await db
    .insert(posts)
    .values({
      id: postId,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      bodyMarkdown: post.bodyMarkdown,
      status: "published",
      publishedAt: post.publishedAt,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      updatedAt: new Date(),
    })
    .onConflictDoUpdate({
      target: posts.slug,
      set: {
        title: post.title,
        excerpt: post.excerpt,
        bodyMarkdown: post.bodyMarkdown,
        status: "published",
        publishedAt: post.publishedAt,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        updatedAt: new Date(),
      },
    })

  await db.delete(postTags).where(eq(postTags.postId, postId))

  for (const tagName of post.tags) {
    const tagSlug = toSlug(tagName)
    const tagId = `tag_${tagSlug}`

    await db
      .insert(tags)
      .values({
        id: tagId,
        name: tagName,
        slug: tagSlug,
      })
      .onConflictDoUpdate({
        target: tags.slug,
        set: {
          name: tagName,
        },
      })

    await db
      .insert(postTags)
      .values({
        postId,
        tagId,
      })
      .onConflictDoNothing()
  }
}

console.log(`Seeded ${seedPosts.length} blog posts.`)

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
