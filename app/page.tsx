import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="font-Inter min-h-screen flex justify-center items-center">
      <div className="w-full mt-16 p-4 md:flex md:max-w-5xl">
        <div className="md:w-1/3 w-full mr-10">
          <Header />
        </div>
        <div className="md:w-2/3 w-full space-y-24">
          <AboutMe />
          <Education />
          <Projects />
        </div>
      </div>
    </main>
  );
}
