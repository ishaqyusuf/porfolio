import type { ReactNode } from "react"

const paths = {
  out: <path d="M8 16L16 8M9.5 8H16v6.5" />,
  down: <path d="M6 9.5l6 6 6-6" />,
  next: <path d="M5 12h13M13 7l5 5-5 5" />,
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
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
}

export type IconName = keyof typeof paths

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
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

export function ExternalAnchor({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <Icon name="out" />
    </a>
  )
}
