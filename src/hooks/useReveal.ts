import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .about-layout, .skill-card, .service-card, .contact-panel').forEach(el => {
      el.classList.add('reveal');
      if (el instanceof HTMLElement && (el.classList.contains('skill-card') || el.classList.contains('service-card'))) {
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        el.style.setProperty('--reveal-delay', `${(siblings.indexOf(el) % 4) * 75}ms`);
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}
