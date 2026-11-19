import type { SectionIntro as SectionIntroContent } from "@/lib/portfolio/types"

/** "01 — Selected work" rule with the numbered section marker. */
export function Kicker({ number, label }: { number: string; label: string }) {
  return (
    <p className="kicker">
      <b>{number}</b> — {label}
    </p>
  )
}

/** Kicker, then the section heading beside its short introduction. */
export function SectionIntro({
  intro,
  titleId,
}: {
  intro: SectionIntroContent
  titleId: string
}) {
  return (
    <>
      <Kicker number={intro.number} label={intro.kicker} />
      <div className="section__head">
        <h2 id={titleId}>{intro.title}</h2>
        {intro.body ? <p>{intro.body}</p> : null}
      </div>
    </>
  )
}
