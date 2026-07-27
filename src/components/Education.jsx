import { GraduationCap } from 'lucide-react';
import { education } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import { RevealGroup, RevealItem } from './Reveal';
import SpotlightCard from './SpotlightCard';

const Education = () => (
  <section id="education" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading index="06" kicker="Education" title="Foundations." />

      <RevealGroup className="grid md:grid-cols-3 gap-5">
        {education.map((edu) => (
          <RevealItem key={edu.school}>
            <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-cyan-300 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono-label text-white/35 mb-2">{edu.period}</div>
              <h3 className="font-semibold text-white leading-snug mb-1.5">{edu.school}</h3>
              <p className="text-sm text-white/60">{edu.degree}</p>
              <p className="text-sm text-cyan-300/90 mt-1">{edu.meta}</p>
              {edu.detail && <p className="text-xs text-white/40 mt-3 leading-relaxed">{edu.detail}</p>}
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default Education;
