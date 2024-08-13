import Image from 'next/image';
import gitcord from '../public/projects/gitcord.png';
import jokeis from '../public/projects/jokeis.png';
import movieTwist from '../public/projects/movieTwist.png';
import propertyPulse from '../public/projects/propertyPulse.png';

const projects = [
  {
    name: 'MovieTwist App',
    description:
      'Movie Twist is an application built using Next.js with TailwindCSS and TypeScript. Movie Twist helps you decide what movie you should watch from your provided list of selected movies.',
    src: movieTwist,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    href: 'https://movie-twist.vercel.app/',
  },
  {
    name: 'PropertyPulse App',
    description:
      'A web application to help you find your next rental property, featuring user authentication, user authorization, property search, property listing CRUD functionality.',
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
  },
  {
    name: 'Jokeis App',
    description: `Full CRUD application with several cool features like posting jokes as anonymous user, liking and commenting on jokes, viewing the user's profile, listing your own jokes (including anonymous ones) as well as displaying the jokes you liked.`,
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
  },
  {
    name: 'GitCord App',
    description: `Connect Github with Discord and receive notification on every git commit.`,
    src: gitcord,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/ognjeeen/gitcord',
  },
];

const Projects = () => {
  return (
    <section className="space-y-4">
      <p className="text-2xl font-bold mb-6 text-primaryColor text-center md:text-left">
        Cool Projects I've Built
      </p>
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg transition duration-150 ease-in sm:hover:bg-hoverColor/40 group">
            <div className="flex-shrink-0">
              <Image
                src={project.src}
                alt={project.name}
                className="w-full sm:w-48 h-auto border-[1px] border-primaryColor rounded-lg"
              />
            </div>

            <div className="flex flex-col space-y-2 flex-grow">
              <div className="flex space-x-2 items-center">
                <p className="text-primaryColor text-lg sm:text-xl font-bold">
                  {project.name}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:group-hover:-translate-y-0.5 sm:group-hover:translate-x-0.5 transition-all duration-400 ease-in-out text-primaryColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              <div>
                <p className="text-textColor text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                <ul className="flex gap-1 flex-wrap">
                  {project.technologies.map((technology, index) => (
                    <li
                      key={index}
                      className="bg-primaryColor rounded-full text-white px-3 py-1 text-xs sm:text-sm"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;
