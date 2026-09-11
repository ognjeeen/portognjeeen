import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-5xl gap-16 px-4 py-14 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 md:py-20">
      <Header />
      <div className="min-w-0 space-y-16 md:space-y-28">
        <AboutMe />
        <Education />
        <Projects />
      </div>
    </main>
  );
}
