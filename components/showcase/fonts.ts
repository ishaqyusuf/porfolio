import localFont from "next/font/local"

export const showcaseSans = localFont({
  src: "../../public/fonts/inter.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--showcase-font-sans",
})

export const showcaseDisplay = localFont({
  src: "../../public/fonts/cal-sans.woff2",
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--showcase-font-display",
})
