import type { Config } from 'tailwindcss';
import { content, plugin } from 'flowbite-react/tailwind';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    content(),
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfdfd',
        primaryColor: '#000080',
        textColor: '#363636',
        hoverColor: '#1591ea',
      },
    },
    fontFamily: {
      Baloo2: ['Baloo_2', 'sans-serif'],
      Inter: ['Inter'],
    },
  },
  plugins: [plugin()],
};
export default config;
