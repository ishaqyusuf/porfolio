import { ExternalAnchor } from "@/components/showcase/icon"
import { contact, links, profile } from "@/lib/portfolio/content"

const contactLinks = [links.cv, links.github, links.linkedin]

export function ContactFooter() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact__grid">
          <h2 id="contact-title">{contact.title}</h2>
          <div className="contact__body">
            <p>{contact.body}</p>
          </div>
        </div>
        <a className="contact__email" href={links.email.href}>
          {profile.email}
        </a>
        <div className="contact__links">
          {contactLinks.map((link) => (
            <ExternalAnchor key={link.href} className="btn" href={link.href}>
              {link.label}
            </ExternalAnchor>
          ))}
        </div>
        <div className="foot">
          <span>{contact.footLine}</span>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
