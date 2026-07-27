import { BrainCircuit, Bot, Cloud, Network, Server, Smartphone, Wrench } from 'lucide-react';
import { skillGroups } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import { RevealGroup, RevealItem } from './Reveal';
import SpotlightCard from './SpotlightCard';

const ICONS = { Server, Network, Cloud, Bot, Smartphone, BrainCircuit, Wrench };

const allTech = [...new Set(skillGroups.flatMap((g) => g.items))];

const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        index="02"
        kicker="Capabilities"
        title="A toolkit built for shipping, not just prototyping."
        description="From database schema to Docker to the client app — the full path a product takes to reach real users."
      />

      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => {
          const Icon = ICONS[group.icon];
          return (
            <RevealItem key={group.title}>
              <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6 hover:border-violet-400/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/[0.03] text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <div className="mt-16 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05060a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05060a] to-transparent z-10" />
        <div className="marquee-track">
          {[...allTech, ...allTech].map((tech, i) => (
            <span key={i} className="mx-4 font-mono-label text-sm text-white/35 whitespace-nowrap">
              {tech} <span className="text-violet-400/60 ml-4">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
