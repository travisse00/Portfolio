import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="A collection of things I've actually built."
          text="Each project has its own page with the problem, approach, features, technology, and implementation details."
        />
        <div className="project-grid project-grid-wide">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}