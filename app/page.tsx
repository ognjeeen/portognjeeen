import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import PortfolioMotion from '@/components/PortfolioMotion';

export default function Home() {
  return (
    <PortfolioMotion>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="cinema-hero wrap" aria-labelledby="cinema-title">
          <h1 className="hero-title" id="cinema-title">
            <span className="hero-line"><span>A developer</span></span>
            <span className="hero-line"><span>with a plot twist.</span></span>
          </h1>
          <p className="hero-description">
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
    </PortfolioMotion>
  );
}
