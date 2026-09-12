'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | undefined;
    const tick = (time: number) => lenis?.raf(time * 1000);

    gsap.ticker.lagSmoothing(0);

    function updateScroll() {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = undefined;

      if (!reducedMotion.matches) {
        lenis = new Lenis({
          autoRaf: false,
          lerp: 0.12,
          smoothWheel: true,
          syncTouch: false,
          anchors: true,
        });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(tick);
      }
    }

    updateScroll();
    const seek = (event: Event) => {
      const top = (event as CustomEvent<number>).detail;
      event.preventDefault();
      if (lenis) lenis.scrollTo(top, {
        duration: 1.25,
        easing: (progress) => (1 - Math.cos(Math.PI * progress)) / 2,
      });
      else window.scrollTo({ top, behavior: 'instant' });
    };
    window.addEventListener('portfolio:scroll-to', seek);
    reducedMotion.addEventListener('change', updateScroll);

    return () => {
      reducedMotion.removeEventListener('change', updateScroll);
      window.removeEventListener('portfolio:scroll-to', seek);
      gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
