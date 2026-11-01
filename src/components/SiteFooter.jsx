import { Github, Linkedin, MoveUpRight } from "lucide-react";
import { PROFILE, github } from "../data.js";
import Brand from "./Brand.jsx";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Brand className="footer-brand" />
      <p>Designed with intention. Built with curiosity.</p>
      <div className="footer-links">
        <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-burhan-770867353"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a href="mailto:mdburhan152004@gmail.com" aria-label="Email">
          <MoveUpRight size={18} />
        </a>
      </div>
      <span className="copyright">© 2026 {PROFILE}</span>
    </footer>
  );
}
