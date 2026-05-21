"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
    >
      <span
        aria-hidden="true"
        suppressHydrationWarning
        className="text-sm leading-none"
      >
        {isDark ? "☀" : "◐"}
      </span>
    </Button>
  )
}
