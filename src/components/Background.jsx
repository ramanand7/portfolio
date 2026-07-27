import { useEffect, useState } from 'react';

const Background = () => {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#05060a]">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] bg-violet-600/25 rounded-full blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] bg-cyan-500/20 rounded-full blur-[120px] animate-blob"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[34rem] h-[34rem] bg-indigo-600/20 rounded-full blur-[120px] animate-blob"
        style={{ animationDelay: '-11s' }}
      />

      {/* Mouse spotlight */}
      <div
        className="absolute w-[36rem] h-[36rem] rounded-full transition-transform duration-200 ease-out"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${pos.x - 288}px, ${pos.y - 288}px)`,
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Grid + noise */}
      <div className="absolute inset-0 grid-overlay" />
      <div className="noise-layer" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,6,10,0.6)_100%)]" />
    </div>
  );
};

export default Background;
