import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close} aria-label="Travis home">
          <span className="brand-mark"><Code2 size={19} /></span>
          <span>Travis</span>
        </Link>

        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav-cta" onClick={close}>
          Let's Talk
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}