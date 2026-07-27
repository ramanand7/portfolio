import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isFine, setIsFine] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setIsFine(mq.matches);
    const update = () => setIsFine(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isFine) return;

    const ring = { x: 0, y: 0 };
    const dot = { x: 0, y: 0 };
    let raf;

    const onMove = (e) => {
      dot.x = e.clientX;
      dot.y = e.clientY;
      setHidden(false);
      const target = e.target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      setHovering(!!target);
    };

    const loop = () => {
      ring.x += (dot.x - ring.x) * 0.18;
      ring.y += (dot.y - ring.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [isFine]);

  if (!isFine) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-300 will-change-transform"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border will-change-transform transition-[width,height,border-color,background-color] duration-200 ease-out ${
          hovering
            ? 'w-12 h-12 border-violet-400 bg-violet-400/10'
            : 'w-8 h-8 border-white/30 bg-transparent'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
