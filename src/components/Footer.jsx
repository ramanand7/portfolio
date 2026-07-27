import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/resumeData';

const Footer = () => (
  <footer className="relative border-t border-white/5 py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-sm text-white/35 font-mono-label">
        © {new Date().getFullYear()} {profile.name} — built with React, Tailwind & Framer Motion.
      </div>
      <div className="flex items-center gap-5">
        <a href={`mailto:${profile.email}`} data-cursor className="text-white/40 hover:text-cyan-300 transition-colors">
          <Mail className="w-4.5 h-4.5" />
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" data-cursor className="text-white/40 hover:text-cyan-300 transition-colors">
          <Linkedin className="w-4.5 h-4.5" />
        </a>
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" data-cursor className="text-white/40 hover:text-cyan-300 transition-colors">
          <Github className="w-4.5 h-4.5" />
        </a>
        <button
          data-cursor
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-violet-400/50 transition-colors ml-2"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
