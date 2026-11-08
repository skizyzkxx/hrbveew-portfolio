import { useEffect, useState } from 'react';

export function useCarousel(length: number, delay = 6000) {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(() => !document.hidden);
  const playing = !paused && !hovered && !focused && visible;

  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionChanged = () => { if (motion.matches) setPaused(true); };
    document.addEventListener('visibilitychange', update);
    motion.addEventListener('change', motionChanged);
    return () => {
      document.removeEventListener('visibilitychange', update);
      motion.removeEventListener('change', motionChanged);
    };
  }, []);

  useEffect(() => {
    if (!playing || length < 2) return;
    const timer = window.setTimeout(() => setSelected(current => (current + 1) % length), delay);
    return () => window.clearTimeout(timer);
  }, [playing, selected, length, delay]);

  const select = (index: number) => { setSelected(index); setPaused(true); };
  return { selected, playing, paused, select, setHovered, setFocused, toggle: () => setPaused(current => !current) };
}
