import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ishaq Yusuf - Senior Full-Stack Product Engineer",
  description:
    "Portfolio of Ishaq Yusuf, a senior full-stack product engineer building TypeScript, Next.js, SaaS, and business workflow systems.",
  authors: [{ name: "Ishaq Yusuf" }],
  creator: "Ishaq Yusuf",
  openGraph: {
    title: "Ishaq Yusuf - Senior Full-Stack Product Engineer",
    description:
      "TypeScript, Next.js, SaaS, internal tools, and business workflow systems.",
    url: "https://ishaqyusuf.com",
    siteName: "Ishaq Yusuf",
    type: "website",
  },
  alternates: {
    canonical: "https://ishaqyusuf.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
