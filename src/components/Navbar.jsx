import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-300"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
          scrolled ? 'bg-[#05060a]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => goTo('home')}
            data-cursor
            className="font-mono-label text-sm tracking-wide text-white/90 border border-white/15 rounded-full px-3.5 py-1.5 hover:border-violet-400/60 hover:text-violet-300 transition-colors"
          >
            RS<span className="text-violet-400">.</span>dev
          </button>

          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-1.5 py-1.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-cursor
                onClick={() => goTo(item.id)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/80 to-indigo-500/80"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            data-cursor
            onClick={() => goTo('contact')}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 to-violet-300 rounded-full px-5 py-2 hover:shadow-[0_0_24px_rgba(139,92,246,0.5)] transition-shadow"
          >
            Let's talk
          </button>

          <button
            data-cursor
            className="md:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#05060a]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`text-left py-2.5 text-base ${activeSection === item.id ? 'text-violet-300' : 'text-white/70'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navbar;
