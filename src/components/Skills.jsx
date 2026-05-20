import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">Technologies and tools I work with</p>

      <ul className="skills__grid">
        {skills.map((skill) => (
          <li key={skill} className="skills__card">
            <span className="skills__card-icon" aria-hidden="true">
              {skill.charAt(0)}
            </span>
            <span className="skills__card-name">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}