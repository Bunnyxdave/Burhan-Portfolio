import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { PROFILE, projects, skills } from '../data.js';

export default function Home() {
  return <main>
    <section className="hero page-wrap">
      <div className="hero-copy"><Reveal><Eyebrow>FULL-STACK DEVELOPER · HYDERABAD, INDIA</Eyebrow></Reveal>
        <Reveal delay={80}><h1>Thoughtful code.<br /><span>Useful things.</span></h1></Reveal>
        <Reveal delay={160}><p className="hero-intro">Hey, I’m <strong>Burhan</strong> — a CSE graduate turning ideas into clear, human-friendly digital experiences.</p></Reveal>
        <Reveal delay={240} className="hero-actions"><Link className="button button-dark" to="/my-work">Explore my work <ArrowUpRight size={17} /></Link><Link className="text-link" to="/about">A little about me <ArrowRight size={16} /></Link></Reveal>
        <Reveal delay={330} className="hero-location"><span className="location-pulse"><MapPin size={14} /></span> Based in Hyderabad · Open to opportunities</Reveal>
      </div>
      <Reveal className="portrait-stage" delay={180}><div className="portrait-sun" /><div className="portrait-frame"><img src="/images/burhan-portrait.jpg" alt={`Portrait of ${PROFILE}`} /></div><div className="portrait-note"><span className="note-sparkle"><Sparkles size={16} /></span><span>Learning by<br />building things</span></div><span className="portrait-index">Powered by<br /><b>Bunnyxdave</b></span><span className="orbit orbit-one" /><span className="orbit orbit-two" /></Reveal>
      <a className="scroll-cue" href="#intro"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
    </section>
    <section className="intro-section section-wrap" id="intro"><div className="section-label"><Eyebrow>A BIT ABOUT ME</Eyebrow><span className="label-number">01 — 04</span></div><div className="intro-grid"><Reveal><h2>I like making<br />the complex feel <span>simple.</span></h2></Reveal><Reveal delay={120}><p>I’m a Computer Science graduate from Osmania University, currently sharpening my full-stack skills through hands-on MERN training. I enjoy working where thoughtful design meets practical engineering — from responsive interfaces to data-driven ideas.</p><Link className="arrow-link" to="/about">More about my journey <ArrowUpRight size={16} /></Link></Reveal></div></section>
    <section className="work-section section-wrap" id="work"><div className="section-label"><Eyebrow>SELECTED WORK</Eyebrow><span className="label-number">02 — 04</span></div><div className="section-heading"><Reveal><h2>A few things<br />I’ve <span>been building.</span></h2></Reveal><Reveal delay={100}><Link className="text-link" to="/my-work">All repositories <ArrowUpRight size={16} /></Link></Reveal></div><div className="work-grid">{projects.slice(0, 3).map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}</div></section>
    <section className="skills-section section-wrap" id="skills"><div className="section-label"><Eyebrow>TOOLS OF THE TRADE</Eyebrow><span className="label-number">03 — 04</span></div><div className="skills-grid"><Reveal><h2>Curious by nature.<br /><span>Always learning.</span></h2><p>My toolkit keeps growing. Here are some of the things I work with today.</p></Reveal><Reveal className="skill-cloud" delay={120}>{skills.map((skill, i) => <span className="skill-chip" key={skill} style={{ '--chip-delay': `${i * 45}ms` }}>{skill}</span>)}</Reveal></div></section>
    <section className="contact-section section-wrap" id="contact"><Reveal className="contact-panel"><div><Eyebrow>HAVE SOMETHING IN MIND?</Eyebrow><h2>Let’s make it<br /><span>worth building.</span></h2><p>Open to junior developer roles, collaborations, and interesting conversations.</p></div><a className="contact-cta" href="mailto:mdburhan152004@gmail.com"><span>Say hello</span><ArrowUpRight size={22} /></a><span className="contact-deco">✳</span></Reveal></section>
  </main>;
}
