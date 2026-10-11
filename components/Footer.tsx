import Letterboard from './Letterboard';

const credits = [
  { role: 'Written by', name: 'Ognjen Marinković' },
  { role: 'Built by', name: 'Ognjen Marinković' },
  { role: 'Maintained by', name: 'Ognjen Marinković' },
  null,
  { role: 'GitHub', name: 'github.com/ognjeeen', href: 'https://github.com/ognjeeen' },
  { role: 'LinkedIn', name: 'linkedin.com/in/ognjeeen', href: 'https://linkedin.com/in/ognjeeen' },
  { role: 'Resume', name: 'Resume PDF', href: '/resume.pdf' },
  null,
  { role: 'Filmed in', name: 'Novi Sad, Serbia' },
];

export default function Footer() {
  return (
    <footer className="end-credits wrap" id="contact">
      <Letterboard className="sign end-sign" lines={['What happens next?']} />
      <a className="contact-link" href="mailto:contact.ognjen@gmail.com">contact.ognjen@gmail.com</a>
      <div className="credits-window" tabIndex={0} aria-label="Credits">
        <dl className="credits-roll">
          {credits.map((credit, index) => credit ? (
            <div key={index}>
              <dt>{credit.role}</dt>
              <dd>
                {credit.href
                  ? <a href={credit.href} {...(credit.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>{credit.name}</a>
                  : credit.name}
              </dd>
            </div>
          ) : <div className="credits-gap" key={index} />)}
        </dl>
      </div>
      <p className="thanks">Ognjen Marinković / Thanks for watching.</p>
    </footer>
  );
}
