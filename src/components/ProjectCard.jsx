import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-icon"><Code2 size={21} /></div>
        <span className="project-status">{project.status}</span>
      </div>

      <div>
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
      </div>

      <div className="tech-list">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="tech-chip">{tech}</span>
        ))}
      </div>

      <div className="card-actions">
        <Link to={`/projects/${project.slug}`} className="text-link">
          View case study <ArrowUpRight size={16} />
        </Link>
        {project.liveUrl && (
          <a className="icon-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
            <ExternalLink size={17} />
          </a>
        )}
      </div>
    </article>
  );
}