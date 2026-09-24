import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container narrow-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          text="For project work, collaboration, or software engineering opportunities, the links below are the quickest way to reach me."
        />

        <div className="contact-grid">
          <a className="contact-card" href="mailto:olaoluwalawal011@gmail.com">
            <Mail size={22} />
            <div>
              <span>Email</span>
              <strong>olaoluwalawal011@gmail.com</strong>
            </div>
            <ArrowUpRight size={17} />
          </a>

          <a className="contact-card" href="https://github.com/travisse00" target="_blank" rel="noreferrer">
            <Github size={22} />
            <div>
              <span>GitHub</span>
              <strong>github.com/travisse00</strong>
            </div>
            <ArrowUpRight size={17} />
          </a>

          <a className="contact-card" href="https://www.linkedin.com/in/olaoluwa-lawal-476845389/" target="_blank" rel="noreferrer">
            <Linkedin size={22} />
            <div>
              <span>LinkedIn</span>
              <strong>linkedin.com/in/olaoluwa-lawal-476845389/</strong>
            </div>
            <ArrowUpRight size={17} />
          </a>

          <div className="contact-card static">
            <MapPin size={22} />
            <div>
              <span>Based in</span>
              <strong>Nigeria</strong>
            </div>
          </div>
        </div>

        {/* <div className="contact-note">
          <h2>Before you deploy</h2>
          <p>
            Replace the placeholder email, GitHub, and LinkedIn links with your
            real details. Human beings apparently require accurate contact
            information before they can contact you.
          </p>
        </div> */}
      </div>
    </section>
  );
}