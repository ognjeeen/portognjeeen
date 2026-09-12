import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import SmoothScroll from '@/components/SmoothScroll';
import 'lenis/dist/lenis.css';
import './globals.css';
import './atmosphere.css';

const dmSans = localFont({
  src: [
    { path: './fonts/dm-sans-0.ttf', weight: '400', style: 'normal' },
    { path: './fonts/dm-sans-1.ttf', weight: '500', style: 'normal' },
    { path: './fonts/dm-sans-2.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

const instrumentSerif = localFont({
  src: './fonts/instrument-serif-0.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: 'Ognjen Marinković | Frontend Engineer',
  description:
    'Frontend engineer in Novi Sad, Serbia. Explore MovieTwist, Codex Usage Widget, and my work with React and TypeScript.',
};

export const viewport: Viewport = {
  themeColor: '#271b2c',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
