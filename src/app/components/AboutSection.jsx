"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">Programming Languages: C/C++, Java, SQL, Javascript, Typescript</li>
        <li className="mb-2">
          Frameworks/Libraries: React.js, Next.js, Nuxt.js, Vue.js, Node.js,
          Express.js, Spring, SpringBoot{" "}
        </li>
        <li className="mb-2">Tools: Git/GitHub, Docker, Firebase, MongoDB, JUnit, Mockito</li>
        <li className="mb-2">
          Soft Skills: Curiosity, Passion, Adaptability, Teamwork,
          Communication, Problem-Solving, Self-Driven, Ownership
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex flex-col ">
          <span>
            Sardar Vallabhbhai National Institute of Technology, Surat (NIT
            Surat)
          </span>
          <span>
            <i>B.Tech in CSE,</i> CGPA: 8.2
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">
          Finalist at Dotslash 7.0 National Hackathon
          <br />
          Developed an innovative platform{" "}
          <u>
            <a href="https://signcraft-academy.vercel.app/" target="_blank">
              Signcraft Academy
            </a>
          </u>{" "}
          to empower individuals with disabilities to learn and compete in Hand
          Sign Language.
        </li>
        <li className="mb-2">
          Leadership Roles: Head of Web Development Committee at Sparsh 2023,
          Head of NCC Exhibition at Mindbend 2022.
        </li>
        <li className="mb-2">JEE Advanced 2020 - AIR 11540 (Top 4%)</li>
        <li className="mb-2">JEE Main 2020 - AIR 7566 (Top 0.5%)</li>
      </ul>
    ),
  },
];

const description = (
  <div className="text-base lg:text-lg space-y-4">
    <p>
      Hi, I&apos;m Poorvank Shah, a passionate Software Developer with a strong
      foundation in backend development, full-stack web applications, and
      software engineering. Currently, I&apos;m working at{" "}
      <strong>Barclays</strong>, where I focus on building scalable and reliable
      APIs using Java and Spring Boot.
    </p>
    <p>
      I hold a Bachelor&apos;s degree in Computer Science and Engineering from{" "}
      <strong>NIT Surat</strong>, where I developed a keen interest in fintech,
      AI, and software development. My past experiences include freelancing for
      AI-driven SaaS projects and working with startups like{" "}
      <strong>Welinq (UK)</strong> and <strong>WictroniX</strong>, where I built
      web applications and tech solutions from the ground up.
    </p>
    <p>
      Beyond work, I have a deep passion for problem-solving, automation, and
      optimizing software systems. My NCC journey as a Lance Corporal instilled
      in me leadership, teamwork, and discipline, which I carried forward into
      organizing large-scale events and streamlining recruitment processes.
    </p>
    <p>
      I&apos;m always eager to learn, explore new technologies, and take on
      challenges that push me to grow. If you&apos;re looking to collaborate or
      just want to chat about tech, fintech, or AI, feel free to reach out!
    </p>
  </div>
);
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white flex flex-col mt-8 lg:mt-0 justify-center items-center"
      id="about"
    >
      <h2 className="text-4xl font-bold text-white">About Me</h2>

      <div className="flex w-full flex-col-reverse md:flex-row gap-4 py-8 md:py-16 px-0 xl:gap-8">
        <div className="mt-4 md:w-[70%] md:mt-0 text-left flex flex-col h-full">
          {description}
        </div>
        <div className="flex rounded-md items-center justify-center overflow-hidden md:w-[30%] h-fit">
          <img
            src="/images/IMG_Poorvank.jpg"
            alt="poorvank's photo"
            width={300}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-[50vh] md:h-[40vh] justify-start items-center gap-6">
        <div className="flex flex-row text-lg md:text-xl justify-center overflow-x-auto pb-3">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("achievements")}
            active={tab === "achievements"}
          >
            {" "}
            Achievements{" "}
          </TabButton>
        </div>
        <div className="md:w-[80%] pl-3 md:pl-5 overflow-auto">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
