import type { Metadata, Viewport } from "next"

import { AboutSection } from "@/components/showcase/about-section"
import { CapabilitiesSection } from "@/components/showcase/capabilities-section"
import { ContactSection } from "@/components/showcase/contact-section"
import { showcaseDisplay, showcaseSans } from "@/components/showcase/fonts"
import { Hero } from "@/components/showcase/hero"
import { LabsSection } from "@/components/showcase/labs-section"
import { ProjectTicker } from "@/components/showcase/project-ticker"
import { RolesSection } from "@/components/showcase/roles-section"
import { SiteHeader } from "@/components/showcase/site-header"
import { WorkSection } from "@/components/showcase/work-section"
import { links, nav, profile } from "@/lib/portfolio/content"

export const metadata: Metadata = {
  title: "Ishaq Yusuf · Senior Full-Stack Product Engineer",
  description:
    "Ishaq Yusuf builds the software behind everyday business. Lead developer of GND Millwork’s operations platform, builder of afterservice, and maintainer of four open-source product labs.",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1116" },
  ],
}

export default function Page() {
  return (
    <div
      className={`showcase ${showcaseSans.variable} ${showcaseDisplay.variable}`}
    >
      <a className="skip" href={nav.skip.href}>
        {nav.skip.label}
      </a>
      <SiteHeader
        name={profile.name}
        initials={profile.initials}
        label={nav.label}
        items={nav.items}
        blog={nav.blog}
        hire={nav.hire}
        cv={links.cv}
        availability={nav.availability}
        availabilityLong={nav.availabilityLong}
        sheetLabel={nav.sheetLabel}
        openMenu={nav.openMenu}
        closeMenu={nav.closeMenu}
      />
      <main id="top">
        <Hero />
        <ProjectTicker />
        <WorkSection />
        <LabsSection />
        <CapabilitiesSection />
        <RolesSection />
        <AboutSection />
      </main>
      <ContactSection />
    </div>
  )
}
