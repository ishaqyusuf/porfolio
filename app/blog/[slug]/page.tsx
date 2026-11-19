import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

import { SiteShell } from "@/components/portfolio/site-shell"
import { Badge } from "@/components/ui/badge"
import { formatPostDate } from "@/lib/blog/format"
import { getPublishedPostBySlug } from "@/lib/db/blog"
import { siteEnv } from "@/lib/env"

export const dynamic = "force-dynamic"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found - Ishaq Yusuf",
    }
  }

  const title = post.seoTitle ?? `${post.title} - Ishaq Yusuf`
  const description = post.seoDescription ?? post.excerpt
  const url = `${siteEnv.url}/blog/${post.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedAt.toISOString(),
      authors: ["Ishaq Yusuf"],
      tags: post.tags.map((tag) => tag.name),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <SiteShell>
      <article className="py-20 sm:py-28">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          Back to blog
        </Link>
        <header className="mt-8 border-b border-border pb-8">
          <time
            dateTime={post.publishedAt.toISOString()}
            className="text-sm text-muted-foreground"
          >
            {formatPostDate(post.publishedAt)}
          </time>
          <h1 className="mt-3 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            {post.excerpt}
          </p>
          {post.tags.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li key={tag.slug}>
                  <Badge variant="outline">{tag.name}</Badge>
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="mt-10 text-2xl font-semibold tracking-normal">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 text-xl font-semibold tracking-normal">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-muted-foreground">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mt-6 list-decimal space-y-2 pl-5 text-base leading-8 text-muted-foreground">
                {children}
              </ol>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="font-medium text-foreground underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                {children}
              </a>
            ),
            code: ({ children }) => (
              <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                {children}
              </code>
            ),
          }}
        >
          {post.bodyMarkdown}
        </ReactMarkdown>
      </article>
    </SiteShell>
  )
}
