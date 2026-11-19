"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"

import { Icon } from "@/components/showcase/icon"

const subscribe = () => () => {}

/**
 * Light/dark switch for the homepage. next-themes follows the system theme
 * until the visitor picks one, then persists that choice in localStorage.
 * The icon is chosen in CSS from `.dark` on <html>, so the server markup
 * never depends on the theme; only aria-pressed waits for hydration.
 */
export function ThemeSwitch({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      className={className ? `theme-btn ${className}` : "theme-btn"}
      aria-label="Dark theme"
      aria-pressed={hydrated ? isDark : undefined}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Icon name="moon" className="theme-btn__moon" />
      <Icon name="sun" className="theme-btn__sun" />
    </button>
  )
}
