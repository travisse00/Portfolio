import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page-section">
      <div className="container narrow-container not-found">
        <p className="eyebrow">404</p>
        <h1>That page does not exist.</h1>
        <p>The URL wandered off somewhere. It has been judged accordingly.</p>
        <Link to="/" className="button primary">
          <ArrowLeft size={17} /> Back Home
        </Link>
      </div>
    </section>
  );
}