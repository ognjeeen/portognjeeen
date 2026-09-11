import Image from 'next/image';
import codexUsageWidget from '@/public/projects/codexUsageWidget.png';
import gitcord from '@/public/projects/gitcord.png';
import jokeis from '@/public/projects/jokeis.png';
import movieTwist from '@/public/projects/movieTwist.png';
import propertyPulse from '@/public/projects/propertyPulse.png';
import toExpressDo from '@/public/projects/toExpressDo.jpeg';

const projects = [
  {
    name: 'Codex Usage Widget',
    description:
      'A small open-source Windows widget I built to keep track of Codex subscription usage without opening a browser. It shows remaining 5-hour and weekly limits, reset times, and live task activity on the desktop or taskbar. Built with C#, .NET, and WPF, it talks to the local Codex CLI. What started as something I made for myself ended up reaching a few hundred downloads! 😄',
    src: codexUsageWidget,
    technologies: ['C#', '.NET', 'WPF', 'JSON-RPC', 'Win32'],
    href: 'https://codex-usage-widget.ognjen-marinkovic.chatgpt.site/',
    archived: false,
  },
  {
    name: 'MovieTwist App',
    description:
      'A Next.js application that helps you decide what to watch from your own selection of movies. Built with React, TypeScript, and Tailwind CSS, MovieTwist reached more than 1,000 users in a single month. It is one of my favorite personal projects, combining my interest in web development with my love of movies.',
    src: movieTwist,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    href: 'https://movie-twist.com/',
    archived: false,
  },
  {
    name: 'PropertyPulse App',
    description:
      'A rental property application built with Next.js and React, with MongoDB and Mongoose for data storage. It includes authentication and authorization, property search, and tools to create, view, edit, and delete listings. Users can browse properties to find their next rental and manage their own listings.',
    src: propertyPulse,
    technologies: [
      'Next.js',
      'React',
      'Tailwind',
      'MongoDB',
      'Mongoose',
      'NextAuth.js',
    ],
    href: 'https://property-pulse-jade.vercel.app/',
    archived: true,
  },
  {
    name: 'Jokeis App',
    description:
      'A social application for sharing jokes, with support for posting under your name or anonymously. Users can like and comment on jokes, browse profiles, and create, edit, or delete their own posts. Personal lists keep track of everything you have posted, including anonymous jokes, and the jokes you have liked.',
    src: jokeis,
    technologies: [
      'Next.js',
      'React',
      'Tailwind',
      'MongoDB',
      'Mongoose',
      'NextAuth.js',
    ],
    href: 'https://jokeis.vercel.app/',
    archived: true,
  },
  {
    name: 'GitCord App',
    description:
      'An integration project that connects GitHub with Discord and sends a notification for every commit. Built with Next.js, React, and TypeScript, it brings repository activity into Discord so people can follow development updates from their chat.',
    src: gitcord,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/ognjeeen/gitcord',
    archived: true,
  },
  {
    name: 'to-express-do API App',
    description:
      'A user management API built with Express.js, with endpoints for creating, reading, updating, and deleting users. It uses Passport.js for GitHub authentication and gave me a chance to work on backend development and authentication outside of my usual frontend projects.',
    src: toExpressDo,
    technologies: ['Express.js', 'Passport.js'],
    href: 'https://github.com/ognjeeen/to-express-do',
    archived: true,
  },
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="mb-6 text-2xl font-bold text-primaryColor">
        Projects
      </h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.href}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name}${project.archived ? ' (archived)' : ''} (opens in a new tab)`}
              className="group flex flex-col gap-4 rounded-lg p-4 transition-colors duration-150 hover:bg-hoverColor/40 focus-visible:bg-hoverColor/40 motion-reduce:transition-none sm:flex-row"
            >
              <div className="shrink-0">
                <Image
                  src={project.src}
                  alt=""
                  sizes="(min-width: 640px) 192px, calc(100vw - 64px)"
                  className="h-auto w-full rounded-lg border border-primaryColor sm:w-48"
                />
              </div>
              <div className="flex min-w-0 grow flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-primaryColor sm:text-xl">
                    {project.name}
                  </h3>
                  {project.archived && (
                    <span className="rounded-full border border-primaryColor/20 bg-primaryColor/5 px-2 py-0.5 text-xs font-medium text-primaryColor transition-colors duration-150 group-hover:border-primaryColor/30 group-hover:bg-primaryColor/10 group-focus-visible:border-primaryColor/30 group-focus-visible:bg-primaryColor/10 motion-reduce:transition-none">
                      Archived
                    </span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-5 shrink-0 text-primaryColor transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <p className="text-sm text-textColor sm:text-base">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-primaryColor px-3 py-1 text-xs text-white sm:text-sm"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
