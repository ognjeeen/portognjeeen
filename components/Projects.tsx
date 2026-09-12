import Image from 'next/image';
import ProjectScreening from './ProjectScreening';
import propertyPulse from '@/public/projects/propertyPulse.png';
import jokeis from '@/public/projects/jokeis.png';
import gitcord from '@/public/projects/gitcord.png';
import toExpressDo from '@/public/projects/toExpressDo.jpeg';

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

function MovieFeature() {
  return (
    <>
      <div className="film-poster">
        <div className="poster-copy">
          <h2 className="poster-title">Movie<br />Twist</h2>
          <p>Your movies.<br />A little help choosing.</p>
        </div>
        <div className="film-symbol" aria-hidden="true">
          <div className="orbit" />
          <div className="orbit" />
          <div className="reel">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="6" />
              <circle cx="50" cy="24" r="13" />
              <circle cx="76" cy="50" r="13" />
              <circle cx="50" cy="76" r="13" />
              <circle cx="24" cy="50" r="13" />
            </svg>
          </div>
        </div>
        <span className="poster-foot">A project by Ognjen Marinković</span>
      </div>
      <div className="film-caption">
        <div>
          <p>
            A Next.js app that picks what to watch from your own movie selection.
            More than 1,000 people tried it in a single month.
          </p>
          <Technologies items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']} />
        </div>
        <a className="button cinema-button" href="https://movie-twist.com/" target="_blank" rel="noopener noreferrer">
          Visit MovieTwist
        </a>
      </div>
    </>
  );
}

function WidgetFeature() {
  return (
    <>
      <div className="film-poster widget-poster">
        <div className="poster-copy">
          <h2 className="poster-title">Codex<br />Usage<br />Widget</h2>
          <p>Usage limits.<br />On your desktop.</p>
        </div>
        <div className="usage-symbol" aria-hidden="true">
          <svg viewBox="0 0 310 310" fill="none">
            <circle cx="155" cy="155" r="141" stroke="currentColor" strokeOpacity=".3" />
            <circle cx="155" cy="155" r="115" stroke="currentColor" strokeOpacity=".15" strokeWidth="13" />
            <circle cx="155" cy="155" r="115" stroke="currentColor" strokeWidth="13" strokeLinecap="round" pathLength="100" strokeDasharray="74 100" transform="rotate(-90 155 155)" />
            <circle cx="155" cy="155" r="87" stroke="currentColor" strokeOpacity=".15" strokeWidth="9" />
            <circle cx="155" cy="155" r="87" stroke="currentColor" strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray="42 100" transform="rotate(-90 155 155)" />
            <rect x="117" y="126" width="76" height="58" rx="10" fill="currentColor" />
            <path d="M134 143h42m-42 12h30m-30 12h17" stroke="#c8cee3" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <span className="poster-foot">A project by Ognjen Marinković</span>
      </div>
      <div className="film-caption">
        <div>
          <p>
            An open-source Windows widget for subscription limits, reset times, and
            live task activity. Built for myself, then downloaded a few hundred times.
          </p>
          <Technologies items={['C#', '.NET', 'WPF', 'JSON-RPC', 'Win32']} />
        </div>
        <a
          className="button cinema-button"
          href="https://codex-usage-widget.ognjen-marinkovic.chatgpt.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore the widget
        </a>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <ProjectScreening projects={[
        { id: 'movie', name: 'MovieTwist', subtitle: "A film lover's side project", content: <MovieFeature /> },
        { id: 'widget', name: 'Codex widget', subtitle: 'A tool for the everyday', content: <WidgetFeature /> },
      ]} />
      <section className="cinema-archive wrap" aria-labelledby="archive-title">
        <div className="section-heading">
          <h2 className="cinema-heading" id="archive-title">The earlier work.</h2>
          <p>Four archived projects, each a different experiment.</p>
        </div>
        <div className="archive-list">
          {archivedProjects.map((project) => (
            <article className="archive-item" key={project.href}>
              <Image src={project.image} alt={project.alt} sizes="(max-width: 650px) 76px, 88px" />
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
