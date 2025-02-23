"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

const experiencesData = [
  {
    id: 5,
    company: "Barclays",
    role: "Software Developer, Explorer Graduate Program - APAC",
    date: "Aug 2024 – Present",
    location: "Pune, Maharashtra",
    icon: <CgWorkAlt />,
    description: [
      "Contributed to the Mortgages API team, gaining hands-on experience in Java, Spring Boot and Microservices along with supporting Barclays legacy systems, showcasing multitasking and adaptability.",
      "Wrote JUnit test cases for 10+ APIs, achieving 90%+ code coverage, improving reliability, and ensuring robust error handling.",
      "Resolved a critical API routing issue, ensuring accurate downstream request handling and data consistency across regions.",
      "Strengthened API security and reliability by addressing Prisma vulnerabilities, migrating to updated base templates, and upgrading authentication certificates for secure communication.",
    ],
  },
  {
    id: 4,
    company: "Welinq",
    role: "Software Developer Intern",
    date: "Dec 2023 – Aug 2024",
    location: "Remote, UK",
    icon: <CgWorkAlt />,
    description: [
      "Launched Two web applications from scratch in a fast-paced startup, leveraging VueJS, NuxtJS, while collaborating closely to drive product development and innovation.",
      "Developed Welinq , a platform connecting clients with therapists and enabling seamless scheduling of therapy sessions.",
      "Built TalkTherapy, an AI-driven chat therapy platform enabling real-time conversations, supervised by professional therapists, to enhance accessibility to mental health support.",
    ],
  },
  {
    id: 3,
    company: "WictroniX",
    role: "Project Manager and Developer",
    date: "Aug 2023 – Oct 2023",
    location: "Surat, Gujarat",
    icon: <CgWorkAlt />,
    description: [
      "Led a team of six developers in an early-stage startup, managing full-stack development for a tax consultant client.",
      "Delivered an efficient tax management solution, streamlining ITR filing, and contributed to the startup’s growth through strategic planning, hands-on development, and overseeing development cycles.",
    ],
  },
  {
    id: 2,
    company: "Barclays",
    role: "Developer Intern",
    date: "May 2023 – July 2023",
    location: "Pune, Maharashtra",
    icon: <CgWorkAlt />,
    description: [
      "Developed a specialized Logging Framework enforcing the logging of correlation IDs, enhancing observability and traceability in a dynamic microservices architecture.",
      "Collaborated within a team of 7, gaining hands-on experience with Java, Gradle, and the Log4j2 Library while implementing object-oriented programming concepts.",
    ],
  },
  {
    id: 1,
    company: "SVNIT (NIT Surat)",
    role: "B.Tech in CSE",
    date: "Dec 2020 – May 2024",
    location: "Surat, Gujarat",
    icon: <LuGraduationCap />,
    description: [
      "Data Structures and Algorithms, Database Management System, Operating System, Object-Oriented Programming, Distributed System, Cloud Computing, Software Engineering and Methodology (SDLC)",
    ],
  },
];
const Experience = () => {
  return (
    <>
      <section id="experience" className="mt-8 mb-16 md:mb-40">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          My Experience
        </h2>
        <VerticalTimeline lineColor="linear-gradient(to bottom, #55d7f7, rgb(99, 247, 85))">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                className="md:text-lg"
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                dateClassName="text-lg"
                icon={item.icon}
                iconStyle={{
                  background: "rgb(0,0,0)",
                  fontSize: "1.5rem",
                  boxShadow:
                    "0 0 0 4px rgb(168 85 247), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                }}
              >
                <h2 className=" font-bold" style={{ color: "white" }}>
                  {item.role}
                </h2>
                <h3 className="font-normal !mt-0 ">{item.company}</h3>
                {/* </div> */}
                <ul className="!mt-1 ml-2 !font-normal text-gray-700 dark:text-white/75 whitespace-pre-line list-disc">
                  {Array.isArray(item.description) &&
                    item.description.map((desc, index) => (
                      <li key={index} className="mt-2">{desc}</li>
                    ))}
                </ul>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Experience;
