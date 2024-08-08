import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="font-Inter">
      <Header />
      <div className="md:flex m-auto justify-center items-center mt-10">
        <AboutMe />
        <Education />
      </div>
      <div className="flex m-auto justify-center">
        <Projects />
      </div>
    </main>
  );
}
