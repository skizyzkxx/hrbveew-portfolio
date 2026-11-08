import { useEffect, useState } from 'react';
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('inicio');
  useEffect(() => {
    const update = () => { let current = ids[0]; for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 180) current = id; } if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30) current = ids[ids.length-1]; setActive(current); };
    window.addEventListener('scroll', update, { passive:true }); update();
    return () => window.removeEventListener('scroll', update);
  }, [ids]);
  return active;
}
