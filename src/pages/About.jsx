import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data.js";
import Reveal from "../components/Reveal.jsx";
import Eyebrow from "../components/Eyebrow.jsx";

export default function About() {
  return (
    <main className="inner-page page-wrap">
      <section className="inner-hero">
        <Reveal>
          <Eyebrow>THE PERSON BEHIND THE PIXELS</Eyebrow>
          <h1>
            A little context
            <br />
            goes a <span>long way.</span>
          </h1>
          <p className="hero-intro">
            Developer in progress, curious by default, and happiest when an idea
            starts to click.
          </p>
        </Reveal>
        <Reveal className="about-photo" delay={120}>
          <img
            src="/images/burhan-portrait.jpg"
            alt={`Portrait of ${PROFILE}`}
          />
          <span>Hyderabad, India · 2026</span>
        </Reveal>
      </section>
      <section className="about-story">
        <div className="section-label">
          <Eyebrow>MY STORY</Eyebrow>
          <span className="label-number">01 — 03</span>
        </div>
        <div className="intro-grid">
          <Reveal>
            <h2>
              Good work starts
              <br />
              with <span>good questions.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              I’m a Computer Science & Engineering graduate from Osmania
              University with a 7.5 CGPA. Through my MERN stack and full-stack
              training, I’ve been building a stronger foundation in React,
              Next.js, APIs, databases, and application architecture.
            </p>
            <p>
              Before software, tutoring physics taught me how to listen, explain
              clearly, and meet people where they are. Those habits still shape
              how I think about building useful products and working with a
              team.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="about-details">
        <Reveal className="detail-card">
          <Eyebrow>EDUCATION</Eyebrow>
          <h3>Computer Science & Engineering</h3>
          <p>Osmania University, Hyderabad</p>
          <span>B.E. / B.Tech · CGPA 7.5</span>
        </Reveal>
        <Reveal className="detail-card" delay={100}>
          <Eyebrow>CURRENTLY</Eyebrow>
          <h3>Full-stack development</h3>
          <p>Career Guidance Council, Talent Development Center</p>
          <span>MERN · Next.js · APIs · AI concepts</span>
        </Reveal>
        <Reveal className="detail-card" delay={200}>
          <Eyebrow>ALSO ME</Eyebrow>
          <h3>Physics tutor & mentor</h3>
          <p>Abduls Academy</p>
          <span>Communication · Patience · Problem-solving</span>
        </Reveal>
      </section>
      <section className="about-values">
        <Reveal>
          <Eyebrow>HOW I LIKE TO WORK</Eyebrow>
          <h2>
            Clear thinking.
            <br />
            <span>Steady progress.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul>
            <li>
              <span>01</span> Start with the real problem, then find the
              simplest useful solution.
            </li>
            <li>
              <span>02</span> Keep learning by making things and staying open to
              feedback.
            </li>
            <li>
              <span>03</span> Build for the person on the other side of the
              screen.
            </li>
          </ul>
        </Reveal>
      </section>
      <Reveal className="resume-row">
        <div>
          <Eyebrow>WANT THE FULL PICTURE?</Eyebrow>
          <h2>Take a look at my CV.</h2>
        </div>
        <a
          className="button button-dark"
          href="/Mohammed_Ahmed_Burhanuddin_Nayeem_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open my CV <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </main>
  );
}
