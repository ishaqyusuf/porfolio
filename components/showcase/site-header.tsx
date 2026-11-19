"use client"

import Link from "next/link"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import type { FocusEvent } from "react"

import { ExternalAnchor, Icon } from "@/components/showcase/icon"
import type { ExternalLink, NavItem } from "@/lib/portfolio/types"

type SiteHeaderProps = {
  name: string
  initials: string
  label: string
  items: NavItem[]
  blog: ExternalLink
  hire: ExternalLink
  cv: ExternalLink
  availability: string
  availabilityLong: string
  sheetLabel: string
  openMenu: string
  closeMenu: string
}

/** Scroll distance after which the flush header becomes the floating pill. */
const SCROLL_THRESHOLD = 12
const SHEET_ID = "nav-sheet"
const DESKTOP_QUERY = "(min-width: 961px)"

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  window.addEventListener("resize", onChange, { passive: true })
  return () => {
    window.removeEventListener("scroll", onChange)
    window.removeEventListener("resize", onChange)
  }
}

const isScrolled = () => window.scrollY > SCROLL_THRESHOLD
// The server never knows the scroll position; hydration starts flush and the
// client snapshot takes over in the same commit, so markup never mismatches.
const isScrolledOnServer = () => false

export function SiteHeader({
  name,
  initials,
  label,
  items,
  blog,
  hire,
  cv,
  availability,
  availabilityLong,
  sheetLabel,
  openMenu,
  closeMenu,
}: SiteHeaderProps) {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    isScrolled,
    isScrolledOnServer
  )
  // Transitions switch on only after the first client paint, so a reload
  // mid-page shows the pill immediately instead of animating into it.
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [current, setCurrent] = useState("")
  const pillRef = useRef<HTMLElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let second = 0
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setReady(true))
    })
    return () => {
      cancelAnimationFrame(first)
      cancelAnimationFrame(second)
    }
  }, [])

  // Current section in the nav.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrent(entry.target.getAttribute("data-nav") ?? "")
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    document
      .querySelectorAll("[data-nav]")
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Mobile sheet: focus the first link on open; Escape, outside clicks and
  // widening to desktop close it.
  useEffect(() => {
    if (!menuOpen) return
    sheetRef.current?.querySelector("a")?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return
      event.preventDefault()
      setMenuOpen(false)
      menuBtnRef.current?.focus()
    }
    function onClick(event: MouseEvent) {
      const target = event.target as Node
      if (
        !sheetRef.current?.contains(target) &&
        !pillRef.current?.contains(target)
      ) {
        setMenuOpen(false)
      }
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    function onWiden(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("click", onClick)
    desktop.addEventListener("change", onWiden)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("click", onClick)
      desktop.removeEventListener("change", onWiden)
    }
  }, [menuOpen])

  function onSheetBlur(event: FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget
    if (
      next &&
      !event.currentTarget.contains(next) &&
      next !== menuBtnRef.current
    ) {
      setMenuOpen(false)
    }
  }

  const closeMenuSheet = () => setMenuOpen(false)
  const ariaCurrent = (item: NavItem) =>
    item.spy === current ? ("true" as const) : undefined

  return (
    <header
      className="nav-shell"
      data-scrolled={scrolled ? "true" : "false"}
      data-ready={ready ? "" : undefined}
    >
      <div className="wrap">
        <nav ref={pillRef} className="pill" aria-label={label}>
          <a className="brand" href="#top">
            <span className="mark" aria-hidden="true">
              {initials}
            </span>
            <span className="brand__name">{name}</span>
          </a>
          <ul className="pill__links">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} aria-current={ariaCurrent(item)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={blog.href}>{blog.label}</Link>
            </li>
          </ul>
          <div className="pill__end">
            <span className="avail">
              <span className="avail__dot" aria-hidden="true" />
              {availability}
            </span>
            <a className="btn btn--signal btn--sm pill__hire" href={hire.href}>
              {hire.label}
            </a>
            <button
              ref={menuBtnRef}
              className="menu-btn"
              type="button"
              aria-expanded={menuOpen}
              aria-controls={SHEET_ID}
              aria-label={menuOpen ? closeMenu : openMenu}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name="menu" className="i-open" />
              <Icon name="close" className="i-close" />
            </button>
          </div>
        </nav>
        <div
          ref={sheetRef}
          className="sheet-nav"
          id={SHEET_ID}
          hidden={!menuOpen}
          onBlur={onSheetBlur}
        >
          <ul aria-label={sheetLabel}>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={ariaCurrent(item)}
                  onClick={closeMenuSheet}
                >
                  {item.label} <span>{item.number}</span>
                </a>
              </li>
            ))}
            <li>
              <Link href={blog.href} onClick={closeMenuSheet}>
                {blog.label} <Icon name="next" />
              </Link>
            </li>
          </ul>
          <div className="sheet-nav__foot">
            <span className="avail">
              <span className="avail__dot" aria-hidden="true" />
              {availabilityLong}
            </span>
            <a
              className="btn btn--signal btn--sm"
              href={hire.href}
              onClick={closeMenuSheet}
            >
              {hire.label}
            </a>
            <ExternalAnchor className="btn btn--sm" href={cv.href}>
              {cv.label}
            </ExternalAnchor>
          </div>
        </div>
      </div>
    </header>
  )
}
