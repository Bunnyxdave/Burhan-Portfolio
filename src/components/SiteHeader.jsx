import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand.jsx";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", to: "/", end: true },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "My Work", to: "/my-work" },
  ];
  return (
    <header className="site-header">
      <Brand />
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav
        className={`nav-links ${open ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="/#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a
          className="nav-contact"
          href="/#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
