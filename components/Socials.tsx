'use client';

import Link from 'next/link';
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
    link: 'www.linkedin.com/in/ognjeeen',
  },
  {
    name: 'Mail',
    icon: IoMailOpen,
    link: 'mailto:contact.ognjen@gmail.com',
  },
];

const Socials = () => {
  return (
    <ul className="flex flex-row gap-4">
      {socials.map((social, index) => (
        <li key={index}>
          <Link href={social.link}>
            <social.icon className="size-5 md:size-7 text-primaryColor hover:text-hoverColor/40" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
