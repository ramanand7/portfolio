import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/resumeData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneRaw}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.social.linkedin },
  { icon: Github, label: 'GitHub', value: 'View my code', href: profile.social.github },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    setSubmitting(true);
    setStatus('Sending...');
    try {
      const response = await fetch('https://formspree.io/f/mblygaww', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus('Thank you! Your message has been sent.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="07"
          kicker="Get in touch"
          title="Have a system to build? Let's talk."
          description="Open to backend, architecture, and full-stack engineering roles — and always up for an interesting product conversation."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {contactLinks.map((item) => (
                <MagneticButton
                  as="a"
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  data-cursor
                  strength={0.15}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-violet-400/40 hover:bg-white/[0.05] transition-colors duration-300"
                >
                  <span className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-cyan-300">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm text-white/45">{item.label}</div>
                    <div className="font-medium text-white">{item.value}</div>
                  </div>
                </MagneticButton>
              ))}

              <div className="flex items-center gap-3 text-white/40 text-sm pt-2 pl-1">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <SpotlightCard className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-violet-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-violet-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-violet-400/50 transition-colors resize-none"
                  />
                </div>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-cyan-300"
                  >
                    {status}
                  </motion.div>
                )}

                <button
                  type="submit"
                  data-cursor
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-black font-medium px-6 py-3.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-shadow disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
