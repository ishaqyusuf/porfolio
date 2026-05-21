import type { ReactNode } from "react"

import { ThemeToggle } from "@/components/portfolio/theme-toggle"
import { profile } from "@/lib/portfolio/content"

type SiteShellProps = {
  children: ReactNode
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-8">
        <header className="flex items-center justify-between gap-4 text-sm">
          <a
            href="#about"
            className="font-medium tracking-normal text-foreground underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            {profile.name}
          </a>
          <div className="flex items-center gap-3">
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-4 text-muted-foreground">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>2026 © {profile.name}</p>
          <p>{profile.email}</p>
        </footer>
      </div>
    </div>
  )
}
