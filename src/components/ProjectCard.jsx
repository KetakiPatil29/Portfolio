export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">{project.title[0]}</div>
        )}
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-card__links">
          {/* <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a> */}
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}