import { Icon } from "@/components/showcase/icon"
import { SectionIntro } from "@/components/showcase/section-intro"
import { roles, rolesIntro, skillsLabel } from "@/lib/portfolio/content"

export function RolesSection() {
  return (
    <section
      className="section"
      id="roles"
      aria-labelledby="roles-title"
      data-nav="roles"
    >
      <div className="wrap">
        <SectionIntro intro={rolesIntro} titleId="roles-title" />
        <ol className="roles">
          {roles.map((role) => (
            <li key={role.title} className="role">
              <p className="role__side">
                <span className="role__node" aria-hidden="true" />
                {role.side}
              </p>
              <div>
                <h3>
                  {role.title} <span>· {role.org}</span>
                </h3>
                <p>{role.body}</p>
                <p className="role__skills">
                  <b>{skillsLabel}</b> · {role.skills}
                </p>
              </div>
              <a className="text-link" href={role.link.href}>
                {role.link.label}{" "}
                <Icon
                  name={role.link.direction === "up" ? "up" : "arrow-down"}
                />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
