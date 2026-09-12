import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="cinema-hero wrap" aria-labelledby="cinema-title">
          <h1 id="cinema-title">A developer<br />with a plot twist.</h1>
          <p>
            I&apos;m Ognjen, a frontend engineer who loves movies.<br />
            I build for the web, the desktop, and my own curiosity.
          </p>
          <div className="hero-credit">Based in Novi Sad, Serbia</div>
        </section>
        <Projects />
        <AboutMe />
        <Education />
      </main>
      <Footer />
    </>
  );
}
