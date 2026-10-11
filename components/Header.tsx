export default function Header() {
  return (
    <header className="site-header wrap">
      <a className="brand" href="#" aria-label="Ognjen Marinković, home">
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="17" stroke="currentColor" />
          <g fill="currentColor">
            <circle cx="20" cy="10" r="4" />
            <circle cx="20" cy="30" r="4" />
            <circle cx="10" cy="20" r="4" />
            <circle cx="30" cy="20" r="4" />
            <circle cx="20" cy="20" r="1.6" />
          </g>
        </svg>
        <span>Ognjen Marinković</span>
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="/resume.pdf">Resume</a>
        <a href="mailto:contact.ognjen@gmail.com">Contact</a>
      </nav>
    </header>
  );
}
