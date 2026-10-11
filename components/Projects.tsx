import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import Letterboard from './Letterboard';
import propertyPulse from '@/public/projects/propertyPulse.png';
import jokeis from '@/public/projects/jokeis.png';
import gitcord from '@/public/projects/gitcord.png';
import toExpressDo from '@/public/projects/toExpressDo.jpeg';
import movieTwist from '@/public/projects/movieTwist.png';
import codexWidget from '@/public/projects/widget-native-4x.png';

type Feature = {
  id: 'movie' | 'widget';
  name: string;
  subtitle: string;
  title: ReactNode;
  tagline: ReactNode;
  emblem: ReactNode;
  image: StaticImageData;
  alt: string;
  still: string;
  credit: string;
  description: string;
  technologies: string[];
  href: string;
  action: string;
};

const features: Feature[] = [
  {
    id: 'movie',
    name: 'MovieTwist',
    subtitle: "A film lover's side project",
    title: <>Movie<br />Twist</>,
    tagline: <>Your movies.<br />A little help choosing.</>,
    emblem: (
      <svg className="emblem spin" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="48" fill="currentColor" />
        <g className="emblem-holes">
          <circle cx="50" cy="22" r="11" />
          <circle cx="50" cy="78" r="11" />
          <circle cx="22" cy="50" r="11" />
          <circle cx="78" cy="50" r="11" />
          <circle cx="50" cy="50" r="4" />
        </g>
      </svg>
    ),
    image: movieTwist,
    alt: 'MovieTwist movie search, with Interstellar in the search field.',
    still: "Your watchlist. Tonight's decision.",
    credit: 'MovieTwist',
    description: 'A Next.js app that picks what to watch from your own movie selection. More than 1,000 people tried it in a single month.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    href: 'https://movie-twist.com/',
    action: 'Visit MovieTwist',
  },
  {
    id: 'widget',
    name: 'Codex widget',
    subtitle: 'A tool for the everyday',
    title: <>Codex<br />Usage<br />Widget</>,
    tagline: <>Usage limits.<br />On your desktop.</>,
    emblem: (
      <svg className="emblem gauge" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="gauge-arc" cx="50" cy="50" r="44" pathLength="100" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    image: codexWidget,
    alt: 'Codex Usage Widget showing remaining subscription limits and reset times. Example screenshot.',
    still: 'A small window into your workday.',
    credit: 'Codex Usage Widget',
    description: 'An open-source Windows widget for subscription limits, reset times, and live task activity. Built for myself, then downloaded a few hundred times.',
    technologies: ['C#', '.NET', 'WPF', 'JSON-RPC', 'Win32'],
    href: 'https://codex-usage-widget.ognjen-marinkovic.chatgpt.site/',
    action: 'Explore the widget',
  },
];

const archivedProjects = [
  {
    name: 'PropertyPulse',
    href: 'https://property-pulse-jade.vercel.app/',
    image: propertyPulse,
    alt: 'PropertyPulse property search',
    description: 'A rental application with property search, authentication, and listing management.',
    technologies: ['Next.js', 'React', 'Tailwind', 'MongoDB', 'Mongoose', 'NextAuth.js'],
  },
  {
    name: 'Jokeis',
    href: 'https://jokeis.vercel.app/',
    image: jokeis,
    alt: 'Jokeis joke sharing application',
    description: 'Jokes, likes, and conversations. Post as yourself or stay anonymous.',
    technologies: ['Next.js', 'React', 'Tailwind', 'MongoDB', 'Mongoose', 'NextAuth.js'],
  },
  {
    name: 'GitCord',
    href: 'https://github.com/ognjeeen/gitcord',
    image: gitcord,
    alt: 'GitCord integration project',
    description: 'A GitHub and Discord integration that brings every commit into the conversation.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'to-express-do',
    href: 'https://github.com/ognjeeen/to-express-do',
    image: toExpressDo,
    alt: 'to-express-do API project',
    description: 'A user management API and a chance to explore backend development with GitHub authentication.',
    technologies: ['Express.js', 'Passport.js'],
  },
];

function Billing({ technologies }: { technologies: string[] }) {
  return (
    <div className="billing">
      <div className="billing-row"><span className="small">A project by</span><span className="large">Ognjen Marinković</span></div>
      <div className="billing-row">
        <span className="small">with</span>
        {technologies.map((technology, index) => (
          <span className="billing-credit" key={technology}>
            {index > 0 && <span className="small" aria-hidden="true">·</span>}
            <span className="large">{technology}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureFilm({ feature }: { feature: Feature }) {
  const widget = feature.id === 'widget';
  return (
    <article className="feature" aria-labelledby={`${feature.id}-title`}>
      <div className="poster-case reveal">
        <div className={`poster ${widget ? 'poster-widget' : ''}`} data-tilt>
          <p className="poster-tagline">{feature.tagline}</p>
          <p className="poster-title" aria-hidden="true">{feature.title}</p>
          {feature.emblem}
          <Billing technologies={feature.technologies} />
        </div>
      </div>
      <div className="feature-copy">
        <figure className={`screen reveal ${widget ? 'screen-widget' : ''}`} data-screen>
          <div className="screen-picture">
            <Image src={feature.image} alt={feature.alt} fill unoptimized={widget}
              sizes="(max-width: 900px) 92vw, 640px" />
          </div>
          <span className="cue-mark" aria-hidden="true" />
          <figcaption><span>{feature.still}</span><span>{feature.credit}</span></figcaption>
        </figure>
        <div className="feature-meta reveal">
          <h3 id={`${feature.id}-title`}>{feature.name} <span>{feature.subtitle}</span></h3>
          <p>{feature.description}</p>
          <ul className="chips" aria-label="Technologies">
            {feature.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="feature-actions">
            <a className="ticket" href={feature.href} target="_blank" rel="noopener noreferrer">{feature.action}</a>
            <button className="reel-button" type="button" data-roll hidden>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" />
                <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
              </svg>
              Roll the reel again
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="wrap">
      <section className="showing" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <Letterboard className="sign" id="work-title" lines={['Now showing']} />
          <p>
            Personal projects.<br />Written, built, and maintained by me.<br />
            <a href="https://github.com/ognjeeen" target="_blank" rel="noopener noreferrer">Find me on GitHub</a>
          </p>
        </div>
        {features.map((feature) => <FeatureFilm feature={feature} key={feature.id} />)}
      </section>

      <section className="archive" aria-labelledby="archive-title">
        <div className="section-heading">
          <Letterboard className="sign" id="archive-title" lines={['The earlier work.']} />
          <p>Four archived projects, each a different experiment.</p>
        </div>
        <div className="film" aria-hidden="true">
          <div className="film-track">
            <div className="film-cell film-cell-blank">Start</div>
            {archivedProjects.map((project, index) => (
              <div className="film-cell" key={project.href}>
                <Image src={project.image} alt="" fill sizes="(max-width: 650px) 220px, 330px" />
                <span className="frame-number">{index + 1}A</span>
              </div>
            ))}
            <div className="film-cell film-cell-blank">Tail</div>
          </div>
        </div>
        <div className="archive-list">
          {archivedProjects.map((project, index) => (
            <article className="archive-item reveal" key={project.href}>
              <span className="frame-number-label">{index + 1}A</span>
              <a className="archive-title" href={project.href} target="_blank" rel="noopener noreferrer">
                <h3>{project.name}</h3>
                <span className="archive-badge">Archived</span>
              </a>
              <p>{project.description}</p>
              <p className="archive-tools">{project.technologies.join(', ')}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
