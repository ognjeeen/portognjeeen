import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="cinema-footer wrap" id="contact">
      <h2>What happens next?</h2>
      <a className="contact-link" href="mailto:contact.ognjen@gmail.com">contact.ognjen@gmail.com</a>
      <div className="footer-bottom">
        <span>Ognjen Marinković / Thanks for watching.</span>
        <Socials />
      </div>
    </footer>
  );
}
