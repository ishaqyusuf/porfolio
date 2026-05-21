import { cn } from "@/lib/utils"

type LinkItem = {
  label: string
  href: string
}

type LinkListProps = {
  links: LinkItem[]
  className?: string
}

export function LinkList({ links, className }: LinkListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noreferrer noopener" : undefined
            }
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
