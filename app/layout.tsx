import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeInit } from '../.flowbite-react/init';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'portognjeeen',
  description: `Welcome to Ognjen's portfolio!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className={inter.className}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
