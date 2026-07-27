import { Award, GraduationCap, MapPin, Rocket } from 'lucide-react';
import myPhoto from '../assets/myphoto.jpeg';
import { profile } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';
import SpotlightCard from './SpotlightCard';

const quickFacts = [
  { icon: GraduationCap, text: 'B.Tech IT, Delhi Technological University · 8.4 CGPA' },
  { icon: MapPin, text: profile.location },
  { icon: Award, text: 'Published Research Paper · 98% Accuracy' },
  { icon: Rocket, text: 'Sole engineer on a live enterprise platform' },
];

const About = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading index="01" kicker="About" title="Engineer who owns the whole stack." />

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        <Reveal delay={0.1}>
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-indigo-500/10 to-cyan-400/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 overflow-hidden">
              <img src={myPhoto} alt="Ramanand Sharma" className="w-full aspect-[4/5] object-cover grayscale-[15%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#0b0d14]/95 backdrop-blur-xl px-5 py-3 font-mono-label text-xs">
              <span className="text-lime-300">● </span>
              <span className="text-white/70">Open to opportunities</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {profile.stats.map((stat) => (
                <SpotlightCard key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
                    {stat.display ? stat.display : (
                      <CountUp value={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix || ''} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                    )}
                  </div>
                  <div className="mt-1.5 text-sm text-[var(--color-mist)]">{stat.label}</div>
                </SpotlightCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 space-y-3">
              {quickFacts.map((fact, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <fact.icon className="w-4 h-4 text-cyan-300" />
                  </span>
                  <span className="text-sm md:text-base">{fact.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
