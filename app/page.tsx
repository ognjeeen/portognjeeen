import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="font-Inter">
      <Header />
      <section className="md:flex m-auto justify-center items-center mt-10">
        <AboutMe />
        <Education />
      </section>
    </main>
  );
}
