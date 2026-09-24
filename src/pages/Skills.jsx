import SectionHeading from "../components/SectionHeading";
import TechBadge from "../components/TechBadge";

const skillGroups = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "SQL", "Mongoose"] },
  { category: "Authentication", items: ["JWT", "bcrypt", "Protected Routes", "Role-based Flows"] },
  { category: "Tools", items: ["Git", "GitHub", "Vite", "Postman", "Figma"] },
  { category: "Other", items: ["Formik", "Yup", "Context API", "Responsive Design"] }
];

export default function Skills() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I use to turn requirements into applications."
          text="My strongest area is full-stack JavaScript development, with experience across both document and relational databases."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => <TechBadge key={group.category} {...group} />)}
        </div>
      </div>
    </section>
  );
}