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

        {about.certifications?.length > 0 && (
          <>
            <h3 className="about__subtitle about__subtitle--spaced">
              Courses & Certifications
            </h3>
            <ul className="about__education">
              {about.certifications.map((cert) => (
                <li
                  key={`${cert.title}-${cert.year}`}
                  className="about__edu-card"
                >
                  <div className="about__edu-header">
                    <h4>{cert.title}</h4>
                    <span className="about__edu-year">{cert.year}</span>
                  </div>
                  <p className="about__edu-field">{cert.type}</p>
                  <p className="about__edu-school">{cert.provider}</p>

                  {cert.tech?.filter(Boolean).length > 0 && (
                    <>
                      <p className="experience__tech-label">Skills</p>
                      <ul className="experience__tech about__cert-tech">
                        {cert.tech.filter(Boolean).map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}