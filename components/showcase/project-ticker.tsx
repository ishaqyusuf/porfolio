import { ticker } from "@/lib/portfolio/content"

export function ProjectTicker() {
  return (
    <nav className="ticker" aria-label={ticker.label}>
      <div className="wrap">
        <ul>
          {ticker.items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <b>{item.name}</b>
                {item.domain}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
