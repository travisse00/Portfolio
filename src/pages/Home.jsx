import { ArrowRight, Github, Linkedin, Mail, Code2, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3); // Get the first 3 projects for the home page
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineering Student · Full-Stack Developer</p>
            <h1>Building practical software from the idea to the database.</h1>
            <p className="hero-text">
              I'm Travis. I build full-stack web applications with React, Node.js,
              Express, and databases, while continuously sharpening the engineering
              behind them.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="button primary">
                Explore Projects <ArrowRight size={17} />
              </Link>
              <Link to="/about" className="button secondary">
                About Me
              </Link>
            </div>

            <div className="social-row">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:your-email@example.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-header">
              <span className="status-dot"></span>
              <span>Currently building</span>
            </div>
            <div className="hero-panel-body">
              <Code2 size={30} />
              <h2>Full-Stack Web Applications</h2>
              <p>
                Frontend interfaces, backend APIs, authentication, databases,
                deployment, and the occasional battle with npm.
              </p>
            </div>
            <div className="hero-panel-footer">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that show how I build."
            text="A few completed projects across frontend development, APIs, authentication, CRUD systems, and relational databases."
          />
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="center-link">
            <Link to="/projects" className="text-link large">
              View all projects <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">How I Work</p>
            <h2>I learn by building, breaking, and fixing real systems.</h2>
          </div>
          <div className="feature-list">
            <div><Layers3 size={20} /><span>Build complete features, not just isolated UI.</span></div>
            <div><Code2 size={20} /><span>Understand how frontend, backend, and data connect.</span></div>
            <div><ArrowRight size={20} /><span>Keep improving the architecture as the project grows.</span></div>
          </div>
        </div>
      </section>
    </>
  );
}