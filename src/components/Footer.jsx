import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Travis</p>
          <p className="footer-copy">Software Engineering Student · Full-Stack Developer</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="/projects" className="footer-project-link">
            Projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}