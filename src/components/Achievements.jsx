import { ArrowUpRight, BookOpen, Star, Trophy, Users } from 'lucide-react';
import { achievements } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import { RevealGroup, RevealItem } from './Reveal';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const Achievements = () => (
  <section id="achievements" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        index="05"
        kicker="Recognition"
        title="Ratings, research, and leadership."
      />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">Competitive Programming</h3>
            </div>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 gap-4">
            {achievements.competitive.map((item) => {
              const Wrapper = item.url ? 'a' : 'div';
              return (
                <RevealItem key={item.platform}>
                  <SpotlightCard
                    as={Wrapper}
                    href={item.url || undefined}
                    target={item.url ? '_blank' : undefined}
                    rel={item.url ? 'noopener noreferrer' : undefined}
                    data-cursor={item.url ? '' : undefined}
                    className="group flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-300/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">{item.platform}</div>
                        <div className="text-sm text-white/55 mt-0.5">{item.detail}</div>
                      </div>
                    </div>
                    {item.url && (
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-300 transition-colors flex-shrink-0" />
                    )}
                  </SpotlightCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <SpotlightCard
              as="a"
              href={achievements.research.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-300/30 transition-colors duration-300"
            >
              <BookOpen className="w-5 h-5 text-cyan-300 mb-3" />
              <div className="font-semibold text-white mb-1.5">{achievements.research.title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{achievements.research.detail}</p>
              <span className="inline-flex items-center gap-1 text-xs text-cyan-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                View publication <ArrowUpRight className="w-3 h-3" />
              </span>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.18}>
            <SpotlightCard className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Users className="w-5 h-5 text-violet-300 mb-3" />
              <div className="font-semibold text-white mb-1.5">{achievements.leadership.title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{achievements.leadership.detail}</p>
              <div className="text-xs text-white/35 font-mono-label mt-3">{achievements.leadership.period}</div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
