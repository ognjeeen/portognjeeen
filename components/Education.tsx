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
    <section className="p-6 bg-gray-100 w-full md:w-2/5">
      <p className="text-2xl font-bold mb-6 text-primaryLight">Education</p>
      <div>
        <Timeline>
          {education.map((item, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />

              <Timeline.Content>
                <Timeline.Time className="text-lg font-semibold text-educationTitleColor">
                  {item.date}
                </Timeline.Time>

                <TimelineTitle className="text-2xl font-bold text-educationTitleColor uppercase mt-2">
                  {item.title}
                </TimelineTitle>

                {item.school && (
                  <Timeline.Body className="text-lg text-textColor">
                    {item.school}
                  </Timeline.Body>
                )}

                {item.technologies && (
                  <Timeline.Body className="text-lg text-textColor">
                    <span className="flex">{item.type}</span>
                    Technologies used:{' '}
                    <span className="font-semibold text-primaryLight">
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
