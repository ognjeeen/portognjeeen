'use client';

import { Timeline, TimelineTitle } from 'flowbite-react';

const education = [
  {
    title: `master's degree, information technology`,
    school:
      'Higher Education Technical School of Professional Studies in Novi Sad - VTSNS',
    date: 'Oct 2022 - Jun 2024',
  },
  {
    title: `Hyperether`,
    type: 'Internship',
    technologies: 'HTML, CSS, JavaScript, React',
    date: 'Jan 2022 - Mar 2022',
  },
  {
    title: `bachelors's degree, information technology`,
    school:
      'Higher Education Technical School of Professional Studies in Novi Sad - VTSNS',
    date: 'Sep 2019 - Mar 2022',
  },
];

const Education = () => {
  return (
    <section className="w-full">
      <p className="text-2xl font-bold mb-6 text-primaryColor">Education</p>
      <div>
        <Timeline>
          {education.map((item, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />

              <Timeline.Content>
                <Timeline.Time className="font-semibold text-primaryColor">
                  {item.date}
                </Timeline.Time>

                <TimelineTitle className="text-xl font-bold text-primaryColor uppercase mt-2">
                  {item.title}
                </TimelineTitle>

                {item.school && (
                  <Timeline.Body className="text-textColor">
                    {item.school}
                  </Timeline.Body>
                )}

                {item.technologies && (
                  <Timeline.Body className="text-textColor">
                    <span className="flex">{item.type}</span>
                    Technologies used:{' '}
                    <span className="font-bold text-primaryColor">
                      {item.technologies}
                    </span>
                  </Timeline.Body>
                )}
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
