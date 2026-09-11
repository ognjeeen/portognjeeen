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
    <section aria-labelledby="education-heading">
      <h2 id="education-heading" className="mb-6 text-2xl font-bold text-primaryColor">
        Education &amp; experience
      </h2>
      <ol className="relative border-l border-gray-200">
        {timeline.map((item) => (
          <li key={item.title} className="mb-10 ml-6 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -left-1.5 mt-1.5 size-3 rounded-full border border-background bg-gray-200"
            />
            <p className="mb-1 text-sm font-semibold leading-none text-primaryColor">
              <time dateTime={item.start.dateTime}>{item.start.label}</time>
              {' - '}
              {item.end ? (
                <time dateTime={item.end.dateTime}>{item.end.label}</time>
              ) : (
                'Present'
              )}
            </p>
            <h3 className="mt-2 text-xl font-bold text-primaryColor uppercase">
              {item.title}
            </h3>
            {item.school && <p className="text-textColor">{item.school}</p>}
            {item.role && <p className="text-textColor">{item.role}</p>}
            {item.description && (
              <p className="mt-2 text-textColor">{item.description}</p>
            )}
            {item.technologies && (
              <p className="text-textColor">
                Technologies used:{' '}
                <span className="font-bold text-primaryColor">
                  {item.technologies}
                </span>
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
