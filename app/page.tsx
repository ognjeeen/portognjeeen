import AboutMe from '@/components/AboutMe';
import CinemaMotion from '@/components/CinemaMotion';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Letterboard from '@/components/Letterboard';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <CinemaMotion />
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="beam" aria-hidden="true" />
          <div className="dust" aria-hidden="true" />
          <div className="wrap">
            <Letterboard as="h1" id="hero-title" className="board" lines={['A developer', 'with a plot twist.']} />
            <p className="hero-copy reveal">
              I&apos;m Ognjen, a frontend engineer who loves movies.<br />
              I build for the web, the desktop, and my own curiosity.
              <span className="hand">Based in Novi Sad, Serbia</span>
            </p>
          </div>
        </section>
        <Projects />
        <AboutMe />
        <Education />
      </main>
      <Footer />
    </>
  );
}
