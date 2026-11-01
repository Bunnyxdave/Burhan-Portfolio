import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { projects } from '../data.js';

export default function ProjectCard({ project, index = 0 }) {
  return <Reveal as="article" className={`work-card ${project.color}`} delay={index * 100}>
    <div className="work-top"><span className="work-number">{project.number} / {String(projects.length).padStart(2, '0')}</span><span className="work-icon" aria-hidden="true">{project.icon}</span></div>
    <p className="work-kind">{project.kind}</p><h3>{project.title}</h3><p className="work-description">{project.description}</p>
    <div className="work-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <a className="work-link" href={project.href} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={17} /></a>
  </Reveal>;
}
