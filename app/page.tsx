import type { Metadata } from "next"

import { AboutSection } from "@/components/showcase/about-section"
import { AfterserviceSection } from "@/components/showcase/afterservice-section"
import { ContactFooter } from "@/components/showcase/contact-footer"
import { showcaseDisplay, showcaseSans } from "@/components/showcase/fonts"
import { GndSection } from "@/components/showcase/gnd-section"
import { Hero } from "@/components/showcase/hero"
import { LabsSection } from "@/components/showcase/labs-section"
import { SiteHeader } from "@/components/showcase/site-header"

export const metadata: Metadata = {
  title: "Ishaq Yusuf · Senior Full-Stack Product Engineer",
  description:
    "Ishaq Yusuf builds the software behind everyday business. Lead developer of GND Millwork’s operations platform, builder of afterservice, and four open-source product labs.",
}

export default function Page() {
  return (
    <div
      className={`showcase ${showcaseSans.variable} ${showcaseDisplay.variable}`}
    >
      <a className="skip" href="#work">
        Skip to work
      </a>
      <SiteHeader />
      <main id="top">
        <Hero />
        <GndSection />
        <AfterserviceSection />
        <LabsSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  )
}
