import { cn } from "@/lib/utils"

type WorkItem = {
  name: string
  type: string
  href: string
  description: string
}

type WorkListProps = {
  work: WorkItem[]
  className?: string
}

export function WorkList({ work, className }: WorkListProps) {
  return (
    <div
      className={cn("divide-y divide-border border-y border-border", className)}
    >
      {work.map((item) => (
        <article
          key={item.name}
          className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]"
        >
          <div>
            <h3 className="text-sm font-medium text-foreground">
              <a
                href={item.href}
                className="underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                target="_blank"
                rel="noreferrer noopener"
              >
                {item.name}
              </a>
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{item.type}</p>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  )
}
