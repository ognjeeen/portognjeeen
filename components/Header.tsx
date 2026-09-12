export default function Header() {
  return (
    <header className="site-header cinema-header wrap">
      <a className="brand" href="#" aria-label="Ognjen Marinković, home">
        <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="16" stroke="currentColor" />
          <circle cx="20" cy="20" r="11" stroke="currentColor" />
          <path d="m17 13 10 7-10 7V13Z" fill="currentColor" />
        </svg>
        <span>Ognjen Marinković</span>
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a className="desktop-link" href="#about">About</a>
        <a href="/resume.pdf">Resume</a>
        <a className="desktop-link" href="mailto:contact.ognjen@gmail.com">Contact</a>
      </nav>
    </header>
  );
}
