import {
  Braces,
  Database,
  Server,
  Layers3,
  Wrench,
  ShieldCheck
} from "lucide-react";

const icons = {
  Frontend: Braces,
  Backend: Server,
  Database,
  "Authentication": ShieldCheck,
  Tools: Wrench,
  "Other": Layers3
};

export default function TechBadge({ category, items }) {
  const Icon = icons[category] || Layers3;

  return (
    <article className="skill-card">
      <div className="skill-icon"><Icon size={20} /></div>
      <h3>{category}</h3>
      <div className="skill-items">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );
}