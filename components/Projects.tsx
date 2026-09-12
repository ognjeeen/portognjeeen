import Image from 'next/image';
import ProjectScreening from './ProjectScreening';
import propertyPulse from '@/public/projects/propertyPulse.png';
import jokeis from '@/public/projects/jokeis.png';
import gitcord from '@/public/projects/gitcord.png';
import toExpressDo from '@/public/projects/toExpressDo.jpeg';
import movieTwist from '@/public/projects/movieTwist.png';
import codexWidget from '@/public/projects/codexUsageWidget.png';

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

function Technologies({ items }: { items: string[] }) {
  return (
    <ul className="project-meta" aria-label="Technologies">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function MovieCaption() {
  return (
    <>
      <div className="film-caption-copy">
        <p>
          A Next.js app that picks what to watch from your own movie selection.
          More than 1,000 people tried it in a single month.
        </p>
        <Technologies items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']} />
      </div>
      <a className="button cinema-button" href="https://movie-twist.com/" target="_blank" rel="noopener noreferrer">
        Visit MovieTwist
      </a>
    </>
  );
}

function WidgetCaption() {
  return (
    <>
      <div className="film-caption-copy">
        <p>
          An open-source Windows widget for subscription limits, reset times, and
          live task activity. Built for myself, then downloaded a few hundred times.
        </p>
        <Technologies items={['C#', '.NET', 'WPF', 'JSON-RPC', 'Win32']} />
      </div>
      <a className="button cinema-button"
        href="https://codex-usage-widget.ognjen-marinkovic.chatgpt.site/"
        target="_blank" rel="noopener noreferrer">
        Explore the widget
      </a>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <ProjectScreening projects={[
        {
          id: 'movie', name: 'MovieTwist', subtitle: "A film lover's side project",
          poster: <>
            <h2 className="poster-title">Movie<br />Twist</h2>
            <p className="poster-tagline">Your movies.<br />A little help choosing.</p>
          </>,
          preview: <figure className="app-preview movie-preview">
            <Image className="project-preview-image" src={movieTwist}
              alt="MovieTwist movie search, with Interstellar in the search field."
              sizes="(max-width: 650px) 90vw, (max-width: 1000px) 70vw, 1100px" />
            <figcaption><span>Your watchlist. Tonight&apos;s decision.</span><span>MovieTwist</span></figcaption>
          </figure>,
          caption: <MovieCaption />,
        },
        {
          id: 'widget', name: 'Codex widget', subtitle: 'A tool for the everyday',
          poster: <>
            <h2 className="poster-title">Codex<br />Usage<br />Widget</h2>
            <p className="poster-tagline">Usage limits.<br />On your desktop.</p>
          </>,
          preview: <figure className="app-preview widget-preview">
            <div className="widget-screen-crop">
            <Image className="project-preview-image" src={codexWidget}
              alt="Codex Usage Widget showing remaining subscription limits and reset times. Example screenshot."
              sizes="(max-width: 650px) 90vw, (max-width: 1000px) 70vw, 1100px" />
            </div>
            <figcaption><span>A small window into your workday.</span><span>Codex Usage Widget</span></figcaption>
          </figure>,
          caption: <WidgetCaption />,
        },
      ]} />
      <section className="cinema-archive wrap" aria-labelledby="archive-title">
        <div className="section-heading">
          <h2 className="cinema-heading" id="archive-title">The earlier work.</h2>
          <p>Four archived projects, each a different experiment.</p>
        </div>
        <div className="archive-list">
          {archivedProjects.map((project) => (
            <article className="archive-item" key={project.href}>
              <div className="archive-image"><Image src={project.image} alt={project.alt} sizes="(max-width: 650px) 76px, 88px" /></div>
              <div>
                <a className="archive-title" href={project.href} target="_blank" rel="noopener noreferrer">
                  <h3>{project.name}</h3>
                  <span className="archive-badge">Archived</span>
                </a>
                <p>{project.description}</p>
                <Technologies items={project.technologies} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
