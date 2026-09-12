import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="cinema-footer wrap" id="contact">
      <svg className="end-mark" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="35" pathLength="100" stroke="currentColor" strokeDasharray="101" />
        <circle cx="40" cy="40" r="26" pathLength="100" stroke="currentColor" strokeDasharray="101" />
        <path d="m34 28 18 12-18 12V28Z" fill="currentColor" />
      </svg>
      <h2 className="footer-title-line"><span>What happens next?</span></h2>
      <a className="contact-link" href="mailto:contact.ognjen@gmail.com">contact.ognjen@gmail.com</a>
      <div className="footer-bottom">
        <span>Ognjen Marinković / Thanks for watching.</span>
        <Socials />
      </div>
    </footer>
  );
}
