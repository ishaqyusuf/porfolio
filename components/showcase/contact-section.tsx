import { ContactForm } from "@/components/showcase/contact-form"
import { CopyEmailChannel } from "@/components/showcase/copy-email"
import { ExternalAnchor, Icon } from "@/components/showcase/icon"
import { Kicker } from "@/components/showcase/section-intro"
import { contact, profile } from "@/lib/portfolio/content"

/** Amber contact band: preview-only form beside the real channels. */
export function ContactSection() {
  return (
    <footer
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
      data-nav="contact"
    >
      <div className="wrap">
        <Kicker number={contact.number} label={contact.kicker} />
        <div className="contact__head">
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.body}</p>
        </div>
        <div className="contact__grid">
          <ContactForm copy={contact.form} />
          <ul className="channels" aria-label={contact.channelsLabel}>
            <CopyEmailChannel email={profile.email} copy={contact.email} />
            {contact.channels.map((channel) => (
              <li key={channel.key} className="channel">
                <div>
                  <span className="channel__k">{channel.key}</span>
                  <span className="channel__v">{channel.value}</span>
                </div>
                <ExternalAnchor
                  className="go"
                  href={channel.href}
                  ariaLabel={channel.ariaLabel}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="foot">
          <span>{contact.footLine}</span>
          <a href="#top">
            {contact.backToTop} <Icon name="up" />
          </a>
        </div>
      </div>
    </footer>
  )
}
