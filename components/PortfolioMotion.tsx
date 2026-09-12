'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const opened = useRef(false);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const select = gsap.utils.selector(root);
      const hero = select('.cinema-hero')[0];
      let intro: gsap.core.Timeline | undefined;

      if (!opened.current && !window.location.hash && window.scrollY < 30) {
        intro = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: () => { opened.current = true; } })
          .from(select('.hero-line > span'), { yPercent: 110, rotation: 2, duration: 0.85, stagger: 0.1 })
          .from(select('.hero-description, .hero-credit'), { opacity: 0, y: 12, duration: 0.55, stagger: 0.08 }, 0.3);
      } else {
        opened.current = true;
      }

      const finishIntro = () => intro?.progress(1);
      window.addEventListener('wheel', finishIntro, { passive: true, once: true });
      window.addEventListener('touchstart', finishIntro, { passive: true, once: true });
      window.addEventListener('keydown', finishIntro, { once: true });

      gsap.to(select('.hero-title'), {
        y: 45,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });

      select('.archive-item').forEach((item: HTMLElement, index: number) => {
        gsap.from(item.querySelector('.archive-image'), {
          clipPath: 'inset(0 100% 0 0)',
          duration: 0.7,
          delay: index % 2 * 0.09,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: item, start: 'top 92%', once: true },
        });
      });

      gsap.timeline({
        scrollTrigger: { trigger: '.cinema-about', start: 'top 78%', once: true },
      })
        .from(select('.about-title-ink path'), { strokeDashoffset: 101, duration: 1.05, stagger: 0.3, ease: 'power1.inOut' })
        .from(select('.about-title-note .script-note-writing'), { clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'steps(18)' }, '-=0.4');

      select('.script-mark, .script-revisited').forEach((passage: HTMLElement) => {
        gsap.from(passage.querySelectorAll('.script-ink path'), {
          strokeDashoffset: 101,
          duration: 1.15,
          stagger: 0.22,
          ease: 'power1.inOut',
          scrollTrigger: { trigger: passage, start: 'top 72%', once: true },
        });
      });

      select('.script-margin-note').forEach((note: HTMLElement) => {
        gsap.from(note.querySelectorAll('.script-note-writing'), {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.25,
          stagger: 0.65,
          ease: 'steps(20)',
          scrollTrigger: { trigger: note, start: 'top 72%', once: true },
        });
      });

      gsap.from(select('.script-reading-progress'), {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: { trigger: '.script-scenes', start: 'top 50%', end: 'bottom 50%', scrub: true },
      });

      select('.script-chapter').forEach((chapter: HTMLElement) => {
        const link = select(`[data-script-link="${chapter.id}"]`)[0];
        ScrollTrigger.create({
          trigger: chapter,
          start: 'top 50%',
          end: 'bottom 50%',
          toggleClass: { targets: link, className: 'is-current' },
        });
      });

      gsap.from(select('.experience-progress'), {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: { trigger: '.experience-list', start: 'top 65%', end: 'bottom 65%', scrub: true },
      });

      select('.experience-item').forEach((item: HTMLElement) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 65%',
          end: 'bottom 65%',
          toggleClass: 'is-current',
        });
      });

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: '.cinema-footer', start: 'top 88%', once: true },
      })
        .from(select('.end-mark circle'), { strokeDashoffset: 101, duration: 1.1, stagger: 0.12 })
        .from(select('.end-mark path'), { opacity: 0, duration: 0.4 }, 0.45)
        .from(select('.footer-title-line > span'), { yPercent: 110, duration: 0.8 }, 0.15);

      return () => {
        window.removeEventListener('wheel', finishIntro);
        window.removeEventListener('touchstart', finishIntro);
        window.removeEventListener('keydown', finishIntro);
      };
    }, root);

    return () => media.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
