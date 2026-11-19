import type { ReactNode } from "react"

const paths = {
  out: <path d="M8 16L16 8M9.5 8H16v6.5" />,
  next: <path d="M5 12h13M13 7l5 5-5 5" />,
  down: <path d="M6 9.5l6 6 6-6" />,
  "arrow-down": <path d="M12 5v13M7 13l5 5 5-5" />,
  up: <path d="M12 19V6M7 11l5-5 5 5" />,
  bell: (
    <>
      <path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z" />
      <path d="M10 20.5h4" />
    </>
  ),
  box: (
    <>
      <path d="M4 8l8-4 8 4v8l-8 4-8-4z" />
      <path d="M4 8l8 4 8-4M12 12v8" />
    </>
  ),
  history: (
    <>
      <path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5" />
      <path d="M4 4.5v4h4M12 8v4.5l3 2" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  menu: <path d="M4 8h16M4 16h16" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="3.75" />
      <path d="M12 3.5v1.75M12 18.75v1.75M3.5 12h1.75M18.75 12h1.75M6 6l1.25 1.25M16.75 16.75L18 18M6 18l1.25-1.25M16.75 7.25L18 6" />
    </>
  ),
  moon: <path d="M19.5 14.2A7.5 7.5 0 0 1 9.8 4.5a7.5 7.5 0 1 0 9.7 9.7z" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5.5M12 16.2v.3" />
    </>
  ),
  layers: (
    <>
      <path d="M12 4l8.5 4.5L12 13 3.5 8.5z" />
      <path d="M3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M9.5 9.5v10" />
    </>
  ),
  doc: (
    <>
      <path d="M6.5 3.5h7l4 4v13h-11z" />
      <path d="M13.5 3.5v4h4M9 12.5h6M9 16h6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
}

export type IconName = keyof typeof paths

/** Stroked 24px line icon; decorative, sized to the surrounding text. */
export function Icon({
  name,
  className,
}: {
  name: IconName
  className?: string
}) {
  return (
    <svg
      className={className ? `i ${className}` : "i"}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Half-filled ring for "under development", open ring for "early stage". */
export function StatusIcon({ variant }: { variant: "development" | "early" }) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <circle
        cx="7"
        cy="7"
        r="5.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {variant === "development" ? (
        <path d="M7 1.25a5.75 5.75 0 0 1 0 11.5z" fill="currentColor" />
      ) : null}
    </svg>
  )
}

/** Link that opens in a new tab, followed by the outbound arrow. */
export function ExternalAnchor({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string
  className?: string
  ariaLabel?: string
  children?: ReactNode
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      {children ? " " : null}
      <Icon name="out" />
    </a>
  )
}
