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
        <li>C, C++, Java, SQL, Git, Gradle</li>
        <li>HTML, CSS, Javascript, React.js, Next.js, Tailwind CSS, Bootstrap, Redux </li>
        <li>Node.js, Express.js, MongoDB, Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Sardar Vallabhbhai National Institute of Technology, Surat <br />(NIT Surat) - <i>B.Tech in CSE</i></li>

      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>JEE Advanced 2020 - AIR 11540 (Top 4%)</li>
        <li>JEE Main 2020 - AIR 7566 (Top 0.5%)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/IMG_2023.png" alt="poorvank's photo" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Poorvank Shah from Ahmedabad, Gujarat. Currently pursuing a Bachelor's degree in Computer Science and Engineering at NIT Surat, I am a full stack developer with a passion for creating interactive and responsive applications. I have experience working with Java, JavaScript, React, Next, Node. Beyond coding, I find joy in playing the piano, spiking volleyballs on the court, and reading books. I am a quick learner always eager to expand my knowledge and skill set. As a team player, I am excited to collaborate with others and contribute to building amazing solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
