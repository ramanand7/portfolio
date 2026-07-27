import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import { RevealGroup, RevealItem } from './Reveal';
import TiltCard from './TiltCard';

const sizeClasses = {
  lg: 'lg:col-span-7',
  md: 'lg:col-span-5',
  sm: 'lg:col-span-4',
};

const statusStyles = {
  Live: 'text-lime-300 border-lime-300/30',
  'In Development': 'text-amber-300 border-amber-300/30',
};

const ProjectCard = ({ project }) => (
  <TiltCard className={`group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 flex flex-col hover:border-white/20 transition-colors duration-300 perspective-container`}>
    <div className="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">{project.title}</h3>
        <p className="text-sm text-white/45 mt-1">{project.subtitle}</p>
      </div>
      <span className={`flex-shrink-0 text-[10px] font-mono-label uppercase tracking-wider border rounded-full px-2.5 py-1 ${statusStyles[project.status]}`}>
        {project.status}
      </span>
    </div>

    <p className="text-sm md:text-[15px] text-white/65 leading-relaxed mb-6">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
      {project.tech.map((t) => (
        <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/[0.03] text-white/55">
          {t}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5">
      {project.links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-cyan-300 transition-colors"
        >
          {link.label}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ))}
    </div>
  </TiltCard>
);

const Projects = () => (
  <section id="projects" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        index="04"
        kicker="Selected Work"
        title="Products shipped, not just repos."
        description="Each one built and owned end-to-end — architecture, backend, client, and release pipeline."
      />

      <RevealGroup className="grid lg:grid-cols-12 gap-5 md:gap-6">
        {projects.map((project) => (
          <RevealItem key={project.title} className={sizeClasses[project.size]}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default Projects;
