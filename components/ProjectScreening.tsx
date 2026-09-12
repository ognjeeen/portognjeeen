'use client';

import { useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScreeningSymbol from './ScreeningSymbol';
import { getScreeningDistance, getScreeningScene, getScreeningTarget } from '@/lib/screening';

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
      desktop: '(min-width: 1001px)',
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

      const morph = gsap.timeline({ paused: true, defaults: { duration: 1, ease: 'none' } })
        .fromTo(select('.symbol-orbit-a'),
          { attr: { rx: 108, ry: 141 }, rotation: 48, transformOrigin: '50% 50%' },
          { attr: { rx: 141, ry: 141 }, rotation: 0 }, 0)
        .fromTo(select('.symbol-orbit-b'),
          { attr: { rx: 108, ry: 141 }, rotation: -48, transformOrigin: '50% 50%' },
          { attr: { rx: 115, ry: 115 }, rotation: 0 }, 0)
        .fromTo(select('.symbol-core'),
          { attr: { x: 78, y: 78, width: 154, height: 154, rx: 77 } },
          { attr: { x: 117, y: 126, width: 76, height: 58, rx: 10 } }, 0)
        .fromTo(select('.symbol-holes'),
          { opacity: 1, scale: 1, fill: '#d2bce8', transformOrigin: '50% 50%' },
          { opacity: 0, scale: 0.45, fill: '#c8cee3' }, 0)
        .fromTo(select('.symbol-gauge'),
          { opacity: 0, strokeDashoffset: 100 },
          { opacity: 1, strokeDashoffset: 0 }, 0)
        .fromTo(select('.symbol-widget-lines'), { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3);

      const applyScene = (progress: number) => {
        const scene = getScreeningScene(progress, projects.length);
        const transition = scene.transition;
        const from = projects[transition?.from ?? scene.project].id === 'widget' ? 1 : 0;
        const to = projects[transition?.to ?? scene.project].id === 'widget' ? 1 : 0;
        const blend = transition ? (1 - Math.cos(Math.PI * transition.progress)) / 2 : 0;
        morph.progress(from + (to - from) * blend);
        gsap.set(select('.film-panel'), { opacity: transition ? Math.abs(2 * blend - 1) : 1 });
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
        end: () => `+=${Math.round(window.innerHeight * getScreeningDistance(projects.length))}`,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => applyScene(self.progress),
        onRefresh: (self) => applyScene(self.progress),
      });

      const seek = (project: number, app: boolean) => {
        const progress = getScreeningTarget(project, app, projects.length);
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
  }, [projects, viewportRevision]);

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
