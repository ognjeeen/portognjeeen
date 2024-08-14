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
    link: 'https://www.linkedin.com/in/ognjen-marinkovi%C4%87-a51722216/',
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
            <social.icon className="size-6 md:size-8 text-primaryColor hover:text-hoverColor/40" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
