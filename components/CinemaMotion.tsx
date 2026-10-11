'use client';

import { useEffect, useRef } from 'react';
import { COUNTER_DASH, counterTiles, rollYear } from '@/lib/cinema';

const random = (min: number, max: number) => min + Math.random() * (max - min);

// One client component drives every effect on the server-rendered page. Without
// JavaScript, or with reduced motion, all content stays visible and still.
export default function CinemaMotion() {
  const grain = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const cleanups: (() => void)[] = [];
    const timers = new Set<number>();
    const later = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => { timers.delete(timer); callback(); }, delay);
      timers.add(timer);
    };
    const frames = new Set<number>();
    const nextFrame = (callback: FrameRequestCallback) => {
      const id = requestAnimationFrame((time) => { frames.delete(id); callback(time); });
      frames.add(id);
    };
    root.classList.add('motion');

    // Film grain, redrawn a few times per second. The canvas follows the real
    // device resolution so each grain stays about 1.5 physical pixels on any
    // screen instead of being stretched on large or high-density displays.
    const canvas = grain.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      const tiles = Array.from({ length: 4 }, () => {
        const tile = document.createElement('canvas');
        tile.width = tile.height = 256;
        const tileContext = tile.getContext('2d');
        if (!tileContext) return null;
        const noise = tileContext.createImageData(256, 256);
        for (let index = 0; index < noise.data.length; index += 4) {
          const value = Math.random() * 255;
          noise.data[index] = noise.data[index + 1] = noise.data[index + 2] = value;
          noise.data[index + 3] = 255;
        }
        tileContext.putImageData(noise, 0, 0);
        return context.createPattern(tile, 'repeat');
      }).filter((pattern) => pattern !== null);
      const resize = () => {
        const scale = (window.devicePixelRatio || 1) / 1.5;
        canvas.width = Math.ceil(window.innerWidth * scale);
        canvas.height = Math.ceil(window.innerHeight * scale);
      };
      resize();
      window.addEventListener('resize', resize);
      cleanups.push(() => window.removeEventListener('resize', resize));
      let last = 0;
      const draw = (time: number) => {
        if (time - last > 80 && tiles.length) {
          last = time;
          context.setTransform(1, 0, 0, 1, -Math.floor(random(0, 256)), -Math.floor(random(0, 256)));
          context.fillStyle = tiles[Math.floor(random(0, tiles.length))];
          context.fillRect(0, 0, canvas.width + 256, canvas.height + 256);
        }
        nextFrame(draw);
      };
      nextFrame(draw);
    }

    // Dust drifting through the projector beam.
    const dust = document.querySelector<HTMLElement>('.dust');
    if (dust) {
      for (let index = 0; index < 26; index++) {
        const speck = document.createElement('i');
        speck.style.left = `${random(38, 62)}%`;
        speck.style.top = `${random(0, 60)}%`;
        speck.style.setProperty('--dx', `${random(-30, 30).toFixed(0)}px`);
        speck.style.animationDuration = `${random(6, 13).toFixed(1)}s`;
        speck.style.animationDelay = `${(-random(0, 12)).toFixed(1)}s`;
        dust.appendChild(speck);
      }
      cleanups.push(() => dust.replaceChildren());
    }

    // Letters drop onto each sign one at a time.
    const placeTiles = (sign: Element, delay = 0) => {
      sign.querySelectorAll<HTMLElement>('.tile').forEach((tile, index) => {
        const rotate = tile.style.getPropertyValue('--r');
        tile.animate([
          { transform: `translateY(-70px) rotate(${random(-25, 25)}deg)`, opacity: 0 },
          { transform: `translateY(6px) rotate(${rotate})`, opacity: 1, offset: 0.7 },
          { transform: `translate(var(--tx), var(--ty)) rotate(${rotate})`, opacity: 1 },
        ], { duration: 520, delay: delay + index * 38, easing: 'cubic-bezier(.3,.6,.3,1)', fill: 'backwards' });
      });
    };
    const signs = [...document.querySelectorAll('[data-tiles]')];
    if (signs[0]) placeTiles(signs[0], 250);

    // A reel change: the cue mark flashes twice, then the picture settles.
    const roll = (screen: Element) => {
      screen.classList.remove('rolling');
      void (screen as HTMLElement).offsetWidth;
      screen.classList.add('rolling');
    };
    const onClick = (event: MouseEvent) => {
      const button = (event.target as Element).closest('[data-roll]');
      const screen = button?.closest('.feature')?.querySelector('[data-screen]');
      if (screen) roll(screen);
    };
    document.addEventListener('click', onClick);
    cleanups.push(() => document.removeEventListener('click', onClick));
    document.querySelectorAll<HTMLButtonElement>('[data-roll]').forEach((button) => { button.hidden = false; });

    const typeHeading = (heading: Element) => {
      const target = heading.querySelector('[data-type]');
      if (!target) return;
      const text = target.textContent ?? '';
      const caret = document.createElement('i');
      caret.className = 'caret';
      target.textContent = '';
      target.appendChild(caret);
      let index = 0;
      const step = () => {
        caret.before(text[index++]);
        if (index < text.length) later(step, random(40, 110));
        else later(() => caret.remove(), 900);
      };
      later(step, 200);
      cleanups.push(() => { target.textContent = text; });
    };

    const writeIn = (element: Element) => element.animate(
      [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }],
      { duration: 1400, delay: 500, easing: 'steps(18, end)', fill: 'backwards' },
    );

    const drawMark = (mark: Element) => mark.querySelector('svg')?.animate(
      [{ clipPath: 'inset(-50% 100% -50% 0)' }, { clipPath: 'inset(-50% 0 -50% 0)' }],
      { duration: 700, delay: 400, easing: 'ease-out', fill: 'backwards' },
    );

    const rollCounter = (counter: HTMLElement) => {
      const years = (counter.dataset.years ?? '').split(' ').map(Number);
      const open = counter.dataset.open !== undefined;
      const digits = [...counter.querySelectorAll<HTMLElement>('.counter-digit')];
      const start = performance.now();
      const tick = (time: number) => {
        const progress = (time - start) / 1100;
        const tiles = counterTiles(years.map((year) => rollYear(year, progress)), open).filter((tile) => tile !== COUNTER_DASH);
        digits.forEach((digit, index) => { digit.textContent = tiles[index]; });
        if (progress < 1) nextFrame(tick);
      };
      nextFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add('in-view');
        if (target.matches('[data-screen]')) roll(target);
        if (target.matches('[data-tiles]') && target !== signs[0]) placeTiles(target);
        if (target.matches('.slug')) typeHeading(target);
        if (target.matches('.handwritten')) writeIn(target);
        if (target.matches('.script-mark')) drawMark(target);
        if (target.matches('.counter')) rollCounter(target as HTMLElement);
        observer.unobserve(target);
      });
    }, { threshold: 0.35 });
    document.querySelectorAll('.reveal, [data-screen], [data-tiles], .slug, .handwritten, .script-mark, .counter')
      .forEach((element) => observer.observe(element));
    cleanups.push(() => observer.disconnect());

    // Posters tilt toward the pointer with a glare across the glass.
    if (window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((poster) => {
        const move = (event: PointerEvent) => {
          const box = poster.getBoundingClientRect();
          const x = (event.clientX - box.left) / box.width - 0.5;
          const y = (event.clientY - box.top) / box.height - 0.5;
          poster.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
          poster.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
          poster.style.setProperty('--glare', `${(x * 120).toFixed(0)}%`);
        };
        const leave = () => {
          poster.style.removeProperty('--ry');
          poster.style.removeProperty('--rx');
          poster.style.removeProperty('--glare');
        };
        poster.addEventListener('pointermove', move);
        poster.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          poster.removeEventListener('pointermove', move);
          poster.removeEventListener('pointerleave', leave);
          leave();
        });
      });
    }

    // The archive film strip drifts with scroll; the scene index follows the screenplay.
    const film = document.querySelector<HTMLElement>('.film');
    const track = document.querySelector<HTMLElement>('.film-track');
    const page = document.querySelector<HTMLElement>('.script-page');
    const progress = document.querySelector<HTMLElement>('.scene-progress');
    const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-scene-link]')];
    const scenes = [...document.querySelectorAll<HTMLElement>('[data-scene]')];
    let pending = false;
    const update = () => {
      pending = false;
      const height = window.innerHeight;
      if (film && track) {
        const box = film.getBoundingClientRect();
        const amount = Math.min(1, Math.max(0, (height - box.top) / (height + box.height)));
        const offset = -amount * Math.max(0, track.scrollWidth - film.clientWidth);
        track.style.transform = `translateX(${offset.toFixed(1)}px)`;
        film.style.setProperty('--holes', `${offset.toFixed(1)}px`);
      }
      if (page && progress) {
        const box = page.getBoundingClientRect();
        const read = Math.min(1, Math.max(0, (height * 0.4 - box.top) / box.height));
        progress.style.setProperty('--read', `${(read * 100).toFixed(1)}%`);
      }
      let current = -1;
      scenes.forEach((scene, index) => { if (scene.getBoundingClientRect().top < height * 0.45) current = index; });
      links.forEach((link, index) => link.classList.toggle('is-current', index === current));
    };
    const onScroll = () => {
      if (!pending) { pending = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    return () => {
      frames.forEach((id) => cancelAnimationFrame(id));
      timers.forEach((timer) => clearTimeout(timer));
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove('motion');
    };
  }, []);

  return <canvas className="grain" ref={grain} aria-hidden="true" />;
}
