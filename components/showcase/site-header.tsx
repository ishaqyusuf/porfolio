import Link from "next/link"

import { Icon } from "@/components/showcase/icon"
import { links, profile } from "@/lib/portfolio/content"

const sectionLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
]

export function SiteHeader() {
  return (
    <header className="top">
      <div className="wrap top__inner">
        <a className="id" href="#top">
          <span className="id__name">{profile.name}</span>
          <span className="id__role">{profile.role}</span>
        </a>
        <nav aria-label="Primary">
          <ul>
            {sectionLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="nav-cv">
              <a href={links.cv.href} target="_blank" rel="noopener noreferrer">
                {links.cv.label} <Icon name="out" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
