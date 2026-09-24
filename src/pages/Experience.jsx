import { GraduationCap, BookOpen, Server, Code2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const milestones = [
  {
    icon: GraduationCap,
    title: "Software Engineering Student",
    period: "2026 — Present",
    text: "Formal software engineering training alongside independent project work."
  },
  {
    icon: Code2,
    title: "Full-Stack Project Development",
    period: "Ongoing",
    text: "Building complete applications with React, Node.js, Express, authentication, APIs, and databases."
  },
  {
    icon: Server,
    title: "Deployment & Hosting",
    period: "Ongoing",
    text: "Learning how finished applications move from local development into hosted environments, including domains, DNS, hosting, and deployment workflows."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    period: "Ongoing",
    text: "Expanding backend and database knowledge while strengthening software engineering fundamentals."
  }
];

export default function Experience() {
  return (
    <section className="page-section">
      <div className="container narrow-container">
        <SectionHeading
          eyebrow="Experience"
          title="My development journey so far."
          text="This page focuses on real learning and project experience rather than inflated job titles or fictional achievements."
        />

        <div className="timeline">
          {milestones.map(({ icon: Icon, title, period, text }) => (
            <article className="timeline-item" key={title}>
              <div className="timeline-icon"><Icon size={20} /></div>
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>{title}</h3>
                  <span>{period}</span>
                </div>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}