import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const tile = localFont({
  src: [
    { path: './fonts/barlow-condensed-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/barlow-condensed-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/barlow-condensed-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-tile',
  display: 'swap',
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
});

const body = localFont({
  src: './fonts/libre-franklin-variable.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-body',
  display: 'swap',
});

const typewriter = localFont({
  src: [
    { path: './fonts/courier-prime-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/courier-prime-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-type',
  display: 'swap',
  fallback: ['Courier New', 'Courier', 'monospace'],
});

const pencil = localFont({
  src: './fonts/nanum-pen-script-400.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-hand',
  display: 'swap',
  fallback: ['Segoe Print', 'Bradley Hand', 'cursive'],
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
    <html lang="en" className={`${tile.variable} ${body.variable} ${typewriter.variable} ${pencil.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
