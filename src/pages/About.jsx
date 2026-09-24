import { Code2, Database, Server, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="page-section">
      <div className="container narrow-container">
        <SectionHeading
          eyebrow="About"
          title="A developer focused on turning ideas into working software."
          text="I'm a software engineering student with a strong interest in full-stack web development."
        />

        <div className="about-content">
          <p>
            I enjoy building applications that go beyond a polished interface.
            My projects usually involve a frontend, backend API, authentication,
            persistent data, and the logic connecting everything together.
          </p>
          <p>
            My current focus is becoming stronger across the full software
            development process: understanding requirements, designing data,
            writing maintainable code, testing features, and getting applications
            deployed.
          </p>
        </div>

        <div className="about-grid">
          <article className="info-card">
            <Code2 size={22} />
            <h3>Frontend</h3>
            <p>React-based interfaces with reusable components and responsive layouts.</p>
          </article>
          <article className="info-card">
            <Server size={22} />
            <h3>Backend</h3>
            <p>Node.js and Express APIs with authentication and application logic.</p>
          </article>
          <article className="info-card">
            <Database size={22} />
            <h3>Data</h3>
            <p>MongoDB and PostgreSQL, including both document and relational modelling.</p>
          </article>
          <article className="info-card">
            <Target size={22} />
            <h3>Approach</h3>
            <p>Build practical projects, understand the why, then improve the implementation.</p>
          </article>
        </div>
      </div>
    </section>
  );
}