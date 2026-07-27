import Reveal from './Reveal';

const SectionHeading = ({ index, title, kicker, description, align = 'left' }) => (
  <div className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
    <Reveal>
      <div className={`flex items-center gap-3 mb-4 font-mono-label text-sm text-cyan-300/80 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-violet-400">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
        <span className="uppercase tracking-[0.2em]">{kicker}</span>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">{title}</h2>
    </Reveal>
    {description && (
      <Reveal delay={0.16}>
        <p className="mt-5 text-lg text-[var(--color-mist)] leading-relaxed">{description}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
