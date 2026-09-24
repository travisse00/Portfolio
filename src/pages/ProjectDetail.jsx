import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Database
} from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="page-section">
        <div className="container narrow-container">
          <p className="eyebrow">Project</p>
          <h1>Project not found.</h1>
          <Link to="/projects" className="text-link">Back to projects <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section project-detail-page">
      <div className="container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="detail-header">
          <div>
            <p className="eyebrow">{project.type}</p>
            <h1>{project.title}</h1>
            <p className="detail-description">{project.description}</p>
          </div>
          <div className="detail-actions">
            {project.liveUrl && (
              <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo <ExternalLink size={16} />
              </a>
            )}
            {project.repoUrl ? (
              <a className="button secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                GitHub <Github size={16} />
              </a>
            ) : (
              <span className="button secondary disabled-button">
                Repository pending
              </span>
            )}
          </div>
        </div>

        <div className="detail-layout">
          <main>
            <section className="detail-section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>

            <section className="detail-section">
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </section>

            <section className="detail-section">
              <h2>The solution</h2>
              <p>{project.solution}</p>
            </section>

            <section className="detail-section">
              <h2>Key features</h2>
              <div className="detail-feature-grid">
                {project.features.map((feature) => (
                  <div className="detail-feature" key={feature}>
                    <CheckCircle2 size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Implementation</h2>
              <div className="implementation-list">
                {project.implementation.map((item, index) => (
                  <div className="implementation-item" key={item}>
                    <span className="step-number">0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section screenshots-section">
              <h2>Screenshots</h2>
              <div className="screenshot-placeholder">
                <Layers3 size={25} />
                <p>Add real project screenshots here</p>
                <span>This section is intentionally a placeholder so the portfolio never pretends a screenshot exists when it doesn't.</span>
              </div>
            </section>
          </main>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-title"><Code2 size={18} /> Stack</div>
              <div className="stack-list">
                {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-title"><Database size={18} /> Project status</div>
              <p>{project.status}</p>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-title"><ArrowUpRight size={18} /> Next project</div>
              <Link to={`/projects/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`} className="sidebar-next">
                {projects[(projects.indexOf(project) + 1) % projects.length].title}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}