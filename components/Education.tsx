import Letterboard from './Letterboard';
import { COUNTER_DASH, counterTiles } from '@/lib/cinema';

const timeline = [
  {
    title: 'THRIVEA',
    role: 'Frontend Engineer',
    description:
      'Build and maintain production frontend features, turning product requirements into responsive interfaces with clear component structure and reliable UI behavior. Work on application state, data, and form-heavy product flows.',
    technologies:
      'React, TypeScript, Material UI, Redux, Redux Saga, Redux Toolkit, TanStack, Zod',
    start: { dateTime: '2025-04', label: 'Apr 2025' },
    end: null,
  },
  {
    title: "Master's degree, information technology",
    school:
      'Higher Education Technical School of Professional Studies in Novi Sad - VTSNS',
    start: { dateTime: '2022-10', label: 'Oct 2022' },
    end: { dateTime: '2024-06', label: 'Jun 2024' },
  },
  {
    title: 'Hyperether',
    role: 'Frontend Intern',
    description:
      'Worked with HTML, CSS, JavaScript, and React during a commercial internship, practicing component-based frontend development and modern web UI implementation.',
    technologies: 'HTML, CSS, JavaScript, React',
    start: { dateTime: '2022-01', label: 'Jan 2022' },
    end: { dateTime: '2022-03', label: 'Mar 2022' },
  },
  {
    title: "Bachelor's degree, information technology",
    school:
      'Higher Education Technical School of Professional Studies in Novi Sad - VTSNS',
    start: { dateTime: '2019-09', label: 'Sep 2019' },
    end: { dateTime: '2022-03', label: 'Mar 2022' },
  },
];

function counterYears(start: string, end: string | undefined) {
  const first = Number(start.slice(0, 4));
  const last = end ? Number(end.slice(0, 4)) : undefined;
  return last === undefined || last === first ? [first] : [first, last];
}

// A footage counter: one dark tile per digit. CinemaMotion rolls the digits up
// when the entry scrolls into view.
function FootageCounter({ years, open }: { years: number[]; open: boolean }) {
  return (
    <div className="counter" aria-hidden="true" data-years={years.join(' ')} data-open={open || undefined}>
      {counterTiles(years, open).map((tile, index) => tile === COUNTER_DASH
        ? <span className="counter-dash" key={index} />
        : <span className="counter-digit" key={index}>{tile}</span>)}
    </div>
  );
}

export default function Education() {
  return (
    <section className="backstory wrap" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <Letterboard className="sign" id="experience-title" lines={['The backstory.']} />
      </div>
      <ol className="filmography">
        {timeline.map((item) => (
          <li className="filmography-item reveal" key={item.title}>
            <div>
              <FootageCounter years={counterYears(item.start.dateTime, item.end?.dateTime)} open={!item.end} />
              <p className="dates">
                <time dateTime={item.start.dateTime}>{item.start.label}</time>
                {' to '}
                {item.end ? <time dateTime={item.end.dateTime}>{item.end.label}</time> : 'present'}
              </p>
            </div>
            <div>
              <h3>{item.role ? item.role + ', ' + item.title : item.title}</h3>
              {item.school && <p>{item.school}</p>}
              {item.description && <p>{item.description}</p>}
              {item.technologies && <p className="tools">{item.technologies}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
