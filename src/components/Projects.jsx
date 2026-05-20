import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}