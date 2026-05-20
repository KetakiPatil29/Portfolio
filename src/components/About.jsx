import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About Me</h2>

      <div className="about__content">
        <p className="about__intro">{about.intro}</p>

        {about.highlights?.length > 0 && (
          <ul className="about__highlights">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <h3 className="about__subtitle">Education</h3>
        <ul className="about__education">
          {about.education.map((edu) => (
            <li key={`${edu.institution}-${edu.year}`} className="about__edu-card">
              <div className="about__edu-header">
                <h4>{edu.degree}</h4>
                <span className="about__edu-year">{edu.year}</span>
              </div>
              <p className="about__edu-field">{edu.field}</p>
              <p className="about__edu-school">{edu.institution}</p>
              {edu.grade && <p className="about__edu-grade">{edu.grade}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}