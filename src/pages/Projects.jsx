import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { github, projects } from "../data.js";

export default function Projects() {
  return (
    <main className="inner-page page-wrap projects-page">
      <section className="inner-hero projects-hero">
        <Reveal>
          <Eyebrow>IDEAS TURNED INTO PRACTICE</Eyebrow>
          <h1>
            Work in progress.
            <br />
            <span>Always learning.</span>
          </h1>
          <p className="hero-intro">
            A few experiments and projects from my journey across web
            development, data, and AI.
          </p>
        </Reveal>
        <Reveal className="project-count" delay={100}>
          <span>{String(projects.length).padStart(2, "0")}</span>
          <p>
            projects
            <br />& experiments
          </p>
        </Reveal>
      </section>
      <section className="projects-list">
        <div className="section-label">
          <Eyebrow>PROJECT NOTES</Eyebrow>
          <span className="label-number">2024 — NOW</span>
        </div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </section>
      <Reveal className="github-panel">
        <div>
          <Eyebrow>MORE EXPERIMENTS</Eyebrow>
          <h2>
            The next idea is
            <br />
            probably <span>already brewing.</span>
          </h2>
          <p>
            Follow along as I keep learning, building, and sharing new work.
          </p>
        </div>
        <a
          className="button button-dark"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} /> Find me on GitHub <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </main>
  );
}
