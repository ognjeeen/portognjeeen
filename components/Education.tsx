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

export default function Education() {
  return (
    <section className="cinema-experience wrap" id="experience" aria-labelledby="experience-title">
      <h2 className="cinema-heading" id="experience-title">The backstory.</h2>
      <div className="experience-track">
        <div className="experience-rail" aria-hidden="true"><span className="experience-progress" /></div>
        <ol className="experience-list">
        {timeline.map((item) => (
          <li className="experience-item" key={item.title}>
            <p className="dates">
              <time dateTime={item.start.dateTime}>{item.start.label}</time>
              {' to '}
              {item.end ? <time dateTime={item.end.dateTime}>{item.end.label}</time> : 'present'}
            </p>
            <div>
              <h3>{item.role ? item.role + ', ' + item.title : item.title}</h3>
              {item.school && <p>{item.school}</p>}
              {item.description && <p>{item.description}</p>}
              {item.technologies && <p className="tools">{item.technologies}</p>}
            </div>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
