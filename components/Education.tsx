'use client';

import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react';

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
            <TimelineItem key={index}>
              <TimelinePoint />

              <TimelineContent>
                <TimelineTime className="font-semibold text-primaryColor">
                  {item.date}
                </TimelineTime>

                <TimelineTitle className="text-xl font-bold text-primaryColor uppercase mt-2">
                  {item.title}
                </TimelineTitle>

                {item.school && (
                  <TimelineBody className="text-textColor">
                    {item.school}
                  </TimelineBody>
                )}

                {item.technologies && (
                  <TimelineBody className="text-textColor">
                    <span className="flex">{item.type}</span>
                    Technologies used:{' '}
                    <span className="font-bold text-primaryColor">
                      {item.technologies}
                    </span>
                  </TimelineBody>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
