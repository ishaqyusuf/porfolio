import type { Metadata } from "next"
import Link from "next/link"

import { SiteShell } from "@/components/portfolio/site-shell"
import { Badge } from "@/components/ui/badge"
import { formatPostDate } from "@/lib/blog/format"
import { getPublishedPosts } from "@/lib/db/blog"
import { siteEnv } from "@/lib/env"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog - Ishaq Yusuf",
  description:
    "Notes from Ishaq Yusuf on product engineering, Next.js, operations, and full-stack systems.",
  alternates: {
    canonical: `${siteEnv.url}/blog`,
  },
  openGraph: {
    title: "Blog - Ishaq Yusuf",
    description:
      "Notes on product engineering, Next.js, operations, and full-stack systems.",
    url: `${siteEnv.url}/blog`,
    type: "website",
  },
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <SiteShell>
      <section className="py-20 sm:py-28" aria-labelledby="blog-title">
        <p className="text-sm font-medium text-muted-foreground">
          Notes on product engineering, operations, and full-stack systems.
        </p>
        <h1
          id="blog-title"
          className="mt-3 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl"
        >
          Blog
        </h1>

        {posts.length > 0 ? (
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.id} className="py-7">
                <article>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold tracking-normal">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                    <time
                      dateTime={post.publishedAt.toISOString()}
                      className="shrink-0 text-sm text-muted-foreground"
                    >
                      {formatPostDate(post.publishedAt)}
                    </time>
                  </div>
                  {post.tags.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <li key={tag.slug}>
                          <Badge variant="outline">{tag.name}</Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <div className="mt-10 border-y border-border py-8">
            <p className="text-sm leading-6 text-muted-foreground">
              No published posts yet.
            </p>
          </div>
        )}
      </section>
    </SiteShell>
  )
}
