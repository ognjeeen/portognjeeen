import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F4F1',
        primary: '#C59658',
        primaryLight: '#e1ab65',
        buttonHover: '#b1874f',
        textColor: '#363636',
        educationTitleColor: '#4B3110',
      },
    },
    fontFamily: {
      Baloo2: ['Baloo_2', 'sans-serif'],
      Inter: ['Inter'],
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
