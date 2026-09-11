import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';

const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/ognjeeen',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com/in/ognjeeen',
  },
  {
    name: 'Email Ognjen',
    icon: IoMailOpen,
    link: 'mailto:contact.ognjen@gmail.com',
  },
];

export default function Socials() {
  return (
    <ul className="flex flex-row gap-4">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.link}
            aria-label={social.name}
            className="flex min-h-11 min-w-11 items-center justify-center rounded text-primaryColor hover:text-hoverColor focus-visible:text-hoverColor"
          >
            <social.icon aria-hidden="true" className="size-5 md:size-7" />
          </a>
        </li>
      ))}
    </ul>
  );
}
