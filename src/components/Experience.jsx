import { experience } from '../data/portfolio'

export default function Experience() {
    return (
        <section id="experience" className="section">
            <h2 className="section__title">Experience</h2>
            <p className="section__subtitle">My work, internships, and hands-on projects</p>

            <ul className="experience__list">
                {experience.map((exp) => (
                    <li key={exp.id} className="experience__card">
                        <div className="experience__header">
                            <div>
                                <h3 className="experience__role">{exp.role}</h3>
                                <p className="experience__company">
                                    {exp.company}
                                    {exp.location && ` · ${exp.location}`}
                                </p>
                            </div>
                            <div className="experience__meta">
                                <span className="experience__period">{exp.period}</span>
                                {exp.type && <span className="experience__type">{exp.type}</span>}
                            </div>
                        </div>

                        {exp.description?.length > 0 && (
                            <ul className="experience__bullets">
                                {exp.description.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {exp.tech?.length > 0 && (
                            <>
                                <p className="experience__tech-label">Technologies & skills</p>
                                <ul className="experience__tech">
                                    {exp.tech.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}