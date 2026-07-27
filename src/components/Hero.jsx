import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile } from '../data/resumeData';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono-label text-xs text-lime-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
              </span>
              Currently shipping <span className="text-white/80">Winx</span> solo @ Excitel Broadband
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl xl:text-8xl font-bold text-white"
            >
              Ramanand
              <br />
              <span className="text-gradient">Sharma</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 h-8 flex items-center font-mono-label text-lg md:text-xl text-cyan-300"
            >
              <span className="text-white/40 mr-2">{'>'}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-1 w-[2px] h-5 bg-cyan-300 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-xl text-base md:text-lg text-[var(--color-mist)] leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                as="button"
                data-cursor
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-shadow"
              >
                <Sparkles className="w-4 h-4" />
                View my work
              </MagneticButton>
              <MagneticButton
                as="a"
                data-cursor
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-7 py-3.5 hover:border-violet-400/60 hover:bg-white/5 transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </MagneticButton>

              <div className="flex items-center gap-3 ml-1">
                {[
                  { icon: Github, href: profile.social.github },
                  { icon: Linkedin, href: profile.social.linkedin },
                  { icon: Mail, href: `mailto:${profile.email}` },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    data-cursor
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white hover:border-violet-400/50 hover:bg-white/5 transition-colors"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono-label text-xs text-white/40"
            >
              {profile.competitive.map((c) => (
                <a key={c.platform} href={c.url} target="_blank" rel="noopener noreferrer" data-cursor className="hover:text-cyan-300 transition-colors">
                  <span className="text-white/70">{c.platform}</span> · {c.handle}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden lg:block"
          >
            <div className="relative w-[22rem] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 font-mono-label text-sm shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-white/30 text-xs">whoami.sh</span>
              </div>
              <div className="space-y-2 text-white/70">
                <p><span className="text-violet-400">$</span> whoami</p>
                <p className="text-cyan-300 pl-3">ramanand_sharma</p>
                <p className="pt-2"><span className="text-violet-400">$</span> experience --years</p>
                <p className="text-cyan-300 pl-3">3.5+ shipping to prod</p>
                <p className="pt-2"><span className="text-violet-400">$</span> role --current</p>
                <p className="text-cyan-300 pl-3">solo engineer @ Excitel</p>
                <p className="pt-2"><span className="text-violet-400">$</span> stack</p>
                <p className="text-white/60 pl-3 leading-relaxed">
                  Java · Spring Boot · PostgreSQL<br />Docker · CI/CD · Flutter · AI
                </p>
                <p className="pt-2 flex items-center gap-1">
                  <span className="text-violet-400">$</span>
                  <span className="w-2 h-4 bg-lime-400 inline-block animate-pulse" />
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-[#0b0d14]/90 backdrop-blur-xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-bold text-white">Top 1%</div>
              <div className="text-[11px] text-white/40 font-mono-label">LeetCode Guardian</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-[#0b0d14]/90 backdrop-blur-xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-bold text-white">65+</div>
              <div className="text-[11px] text-white/40 font-mono-label">BFSI banks served</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        data-cursor
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default Hero;
