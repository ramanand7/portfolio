import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Building2, Calendar, Zap } from 'lucide-react';
import { experience } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="03"
          kicker="Career"
          title="Four roles. One thread: own it end-to-end."
          description="From cross-platform apps to a solo-built enterprise platform in production today."
        />

        <div ref={containerRef} className="relative">
          <div className="absolute left-[27px] md:left-[35px] top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            className="absolute left-[27px] md:left-[35px] top-2 w-px bg-gradient-to-b from-violet-400 via-cyan-300 to-transparent origin-top"
            style={{ scaleY: scrollYProgress, height: 'calc(100% - 1rem)' }}
          />

          <div className="space-y-10 md:space-y-14">
            {experience.map((exp, index) => (
              <Reveal key={exp.company} delay={index * 0.05}>
                <div className="relative pl-16 md:pl-24">
                  <div className="absolute left-[18px] md:left-[26px] top-1.5 w-4 h-4 rounded-full border-2 border-[#05060a] bg-gradient-to-br from-violet-400 to-cyan-300 shadow-[0_0_16px_rgba(139,92,246,0.6)]" />

                  <SpotlightCard className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8 hover:border-white/20 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Building2 className="w-4 h-4 text-violet-400" />
                          <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                          {exp.highlight && (
                            <span className="ml-1 text-[10px] font-mono-label uppercase tracking-wider text-lime-300 border border-lime-300/30 rounded-full px-2 py-0.5">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-cyan-300/90 text-sm md:text-base">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/50 text-sm font-mono-label whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                        <span className="text-white/25">·</span>
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex gap-2.5 text-sm md:text-[15px] text-white/70 leading-relaxed">
                          <Zap className="w-3.5 h-3.5 text-cyan-300 mt-1 flex-shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/[0.03] text-white/55">
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
