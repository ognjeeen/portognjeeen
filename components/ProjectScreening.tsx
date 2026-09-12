'use client';

import { useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScreeningSymbol from './ScreeningSymbol';
import { getScreeningScene } from '@/lib/screening';

gsap.registerPlugin(ScrollTrigger);

type ScreeningProject = {
  id: string;
  name: string;
  subtitle: string;
  poster: ReactNode;
  preview: ReactNode;
  caption: ReactNode;
};

export default function ProjectScreening({ projects }: { projects: ScreeningProject[] }) {
  const [selected, setSelected] = useState(0);
  const [preview, setPreview] = useState(false);
  const [cinematic, setCinematic] = useState(false);
  const [viewportRevision, setViewportRevision] = useState(0);
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const previewRef = useRef(false);
  const previousProject = useRef(0);
  const selectedRef = useRef(0);
  const showPreview = useRef<(next: boolean) => void>(() => {});
  const chooseProject = useRef<(next: number) => void>(() => {});

  useLayoutEffect(() => {
    let resizeFrame = 0;
    const resize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => setViewportRevision((value) => value + 1));
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(resizeFrame);
    };
  }, []);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add({
      all: '(min-width: 0px)',
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 1001px) and (min-height: 740px)',
    }, (context) => {
      const { motion, desktop } = context.conditions!;
      const select = gsap.utils.selector(root);
      if (!root.current || !frame.current) return;
      // Measure the shared frame before deciding whether it fits on screen.
      root.current.dataset.mode = 'sequence';
      const canPin = Boolean(motion && desktop && frame.current.offsetHeight < window.innerHeight - 96);
      root.current.dataset.mode = canPin ? 'sequence' : 'flow';
      setCinematic(canPin);
      if (!canPin) return;

      const publishPreview = (next: boolean) => {
        if (previewRef.current !== next) {
          previewRef.current = next;
          setPreview(next);
        }
      };

      const reveal = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
        .to(select('.symbol-reveal'), { scale: 2.4, opacity: 0, duration: 0.65 }, 0)
        .to(select('.poster-copy, .poster-foot'), { opacity: 0, y: -16, duration: 0.35 }, 0)
        .fromTo(select('.project-preview'),
          { clipPath: 'circle(0% at 76% 45%)' },
          { clipPath: 'circle(125% at 76% 45%)', duration: 1 }, 0.08)
        .fromTo(select('.project-preview-image'), { scale: 1.045 }, { scale: 1, duration: 1 }, 0.08);

      reveal.progress(previewRef.current ? 1 : 0);

      const applyScene = (progress: number) => {
        const scene = getScreeningScene(progress, projects.length);
        if (selectedRef.current !== scene.project) {
          selectedRef.current = scene.project;
          setSelected(scene.project);
        }
        reveal.progress(scene.reveal);
        publishPreview(scene.reveal > 0.55);
      };

      const screening = ScrollTrigger.create({
        trigger: frame.current,
        start: () => `top ${Math.max(32, (window.innerHeight - frame.current!.offsetHeight) / 2)}px`,
        end: () => `+=${Math.round(window.innerHeight * 2.2 * projects.length)}`,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => applyScene(self.progress),
        onRefresh: (self) => applyScene(self.progress),
      });

      const seek = (project: number, app: boolean) => {
        const progress = (project + (app ? 0.7 : 0.08)) / projects.length;
        const top = screening.start + progress * (screening.end - screening.start);
        const request = new CustomEvent<number>('portfolio:scroll-to', { detail: top, cancelable: true });
        if (window.dispatchEvent(request)) {
          window.scrollTo({ top, behavior: 'instant' });
          applyScene(progress);
        }
      };
      chooseProject.current = (next) => seek(next, false);
      showPreview.current = (next) => seek(selectedRef.current, next);
      applyScene(screening.progress);

      if (motion) {
        gsap.to(select('.symbol-turn'), {
          rotation: 65,
          transformOrigin: '50% 50%',
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }

      return () => {
        showPreview.current = () => {};
        chooseProject.current = () => {};
      };
    }, root);

    return () => media.revert();
  }, [projects.length, viewportRevision]);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const changed = previousProject.current !== selected;
    const direction = selected > previousProject.current ? 1 : -1;
    previousProject.current = selected;

    media.add({ all: '(min-width: 0px)', motion: '(prefers-reduced-motion: no-preference)' }, (context) => {
      const select = gsap.utils.selector(root);
      const widget = projects[selected].id === 'widget';
      const duration = changed && context.conditions?.motion ? 1.15 : 0;
      const morph = gsap.timeline({ defaults: { duration, ease: 'power3.inOut' } });

      morph
        .to(select('.symbol-orbit-a'), { attr: { rx: widget ? 141 : 108, ry: 141 }, rotation: widget ? 0 : 48, transformOrigin: '50% 50%' }, 0)
        .to(select('.symbol-orbit-b'), { attr: { rx: widget ? 115 : 108, ry: widget ? 115 : 141 }, rotation: widget ? 0 : -48, transformOrigin: '50% 50%' }, 0)
        .to(select('.symbol-core'), { attr: widget ? { x: 117, y: 126, width: 76, height: 58, rx: 10 } : { x: 78, y: 78, width: 154, height: 154, rx: 77 } }, 0)
        .to(select('.symbol-holes'), { opacity: widget ? 0 : 1, scale: widget ? 0.45 : 1, transformOrigin: '50% 50%' }, 0)
        .to(select('.symbol-gauge'), { opacity: widget ? 1 : 0, strokeDashoffset: widget ? 0 : 100 }, 0)
        .to(select('.symbol-widget-lines'), { opacity: widget ? 1 : 0 }, duration * 0.3);

      if (duration) {
        const panel = root.current?.querySelectorAll('.film-panel')[selected];
        gsap.fromTo(panel?.querySelectorAll('.poster-title, .poster-tagline, .film-caption-copy') ?? [],
          { x: 24 * direction, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power2.out', clearProps: 'transform,opacity' });
        gsap.from(panel?.querySelectorAll('.project-preview-image') ?? [], {
          opacity: 0, duration: 0.5, clearProps: 'opacity',
        });
      }
    }, root);

    // Preserve the current shape when another selection interrupts its transition.
    return () => media.kill(false);
  }, [selected, projects]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown': next = (index + 1) % projects.length; break;
      case 'ArrowLeft':
      case 'ArrowUp': next = (index - 1 + projects.length) % projects.length; break;
      case 'Home': next = 0; break;
      case 'End': next = projects.length - 1; break;
      default: return;
    }
    event.preventDefault();
    chooseProject.current(next);
    buttons.current[next]?.focus({ preventScroll: true });
  }

  return (
    <section ref={root} className="screening-sequence" id="work" aria-label="Selected projects"
      data-project={projects[selected].id} data-mode={cinematic ? 'sequence' : 'flow'}>
      <div className="screening wrap" ref={frame}>
        <div className="screening-backdrop" aria-hidden="true" />
        <div className="screening-menu">
          <h2>Now showing</h2>
          <div className="screening-navigation" role={cinematic ? 'tablist' : 'navigation'} aria-label="Choose a project">
            {projects.map((project, index) => cinematic ? (
              <button className="project-tab" type="button" id={`tab-${project.id}`} key={project.id}
                role="tab" aria-selected={selected === index} aria-controls={`panel-${project.id}`}
                tabIndex={selected === index ? 0 : -1}
                ref={(button) => { buttons.current[index] = button; }}
                onClick={() => chooseProject.current(index)} onKeyDown={(event) => handleKeyDown(event, index)}>
                <strong>{project.name}</strong>
                <span>{project.subtitle}</span>
              </button>
            ) : (
              <a className="project-tab" href={`#panel-${project.id}`} key={project.id}>
                <strong>{project.name}</strong><span>{project.subtitle}</span>
              </a>
            ))}
          </div>
          <button className="screening-view" type="button" hidden={!cinematic} aria-pressed={preview}
            aria-controls={`preview-${projects[selected].id}`} onClick={() => showPreview.current(!previewRef.current)}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" />
              <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
            </svg>
            {preview ? 'Back to the poster' : 'View the app'}
          </button>
          <p className="program-note">
            Personal projects.<br />Written, built, and maintained by me.<br />
            <a href="https://github.com/ognjeeen" target="_blank" rel="noopener noreferrer">Find me on GitHub</a>
          </p>
        </div>
        <div className="screening-panels">
          {projects.map((project, index) => (
            <div className="film-panel" key={project.id} id={`panel-${project.id}`} role={cinematic ? 'tabpanel' : 'region'}
              aria-label={cinematic ? undefined : project.name} aria-labelledby={cinematic ? `tab-${project.id}` : undefined}
              data-active={selected === index} tabIndex={0} hidden={cinematic && selected !== index} inert={cinematic && selected !== index}>
              <div className={`film-poster ${project.id === 'widget' ? 'widget-poster' : ''}`}>
                <div className="poster-copy">{project.poster}</div>
                <span className="poster-foot">A project by Ognjen Marinković</span>
                <div className="project-preview" id={`preview-${project.id}`} aria-hidden={cinematic && !preview} inert={cinematic && !preview}>
                  {project.preview}
                </div>
              </div>
              <div className="film-caption">{project.caption}</div>
            </div>
          ))}
          <div className="symbol-window" aria-hidden="true">
            <div className="symbol-reveal"><ScreeningSymbol /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
