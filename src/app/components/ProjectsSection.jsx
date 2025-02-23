"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ShopEase",
    description: "Ecommerce Application",
    image: "/images/projects/1.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/Poorvank-Shah/ShopEase",
    previewUrl: "https://store-qsts.onrender.com/",
  },
  {
    id: 13,
    title: "Portfolio",
    description: "My Portfolio in NextJS and Tailwind CSS",
    image: "/images/projects/13.png",
    tag: ["All", "Next"],
    gitUrl: "https://github.com/Poorvank-Shah/Portfolio",
    previewUrl: "https://poorvankshah.vercel.app/",
  },
  {
    id: 2,
    title: "CandleVue",
    description: "Real-time Candlestick Chart Visulization",
    image: "/images/projects/2.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/Poorvank-Shah/Candlestick-Chart-Viewer",
    previewUrl: "https://candlevue.vercel.app/",
  },
  {
    id: 3,
    title: "AdminHub",
    description: "Admin Dashboard for ShopEase",
    image: "/images/projects/3.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/Poorvank-Shah/AdminHub-ShopEase",
    previewUrl: "https://store-admin-i5pv.onrender.com/",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Take care of daily todos",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Poorvank-Shah/Todo-list",
    previewUrl: "https://todo-list-r1mx.onrender.com/",
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Manages income and expense",
    image: "/images/projects/5.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Poorvank-Shah/Expense-Tracker",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Url Shortener",
    description: "Shortens large Urls using shrtco.de api",
    image: "/images/projects/6.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Poorvank-Shah/Url-Shortener",
    previewUrl: "https://url-shortener-xljt.onrender.com/",
  },
  // {
  //   id: 7,
  //   title: "Dance Academy",
  //   description: "",
  //   image: "/images/projects/7.png",
  //   tag: ["All", "Node"],
  //   gitUrl: "https://github.com/Poorvank-Shah/Dance-Academy",
  //   previewUrl: "/",
  // },
  {
    id: 8,
    title: "LinkTracker",
    description: "Tracking number of clicks of a shortened link",
    image: "/images/projects/8.png",
    tag: ["All", "Node"],
    gitUrl: "https://github.com/Poorvank-Shah/LinkTracker",
    previewUrl: "",
  },
  // {
  //   id: 9,
  //   title: "Covid-19 Awareness",
  //   description: "Spreading awareness regarding COVID-19",
  //   image: "/images/projects/9.png",
  //   tag: ["All", "Javascript"],
  //   gitUrl: "https://github.com/Poorvank-Shah/covid-19_awareness",
  //   previewUrl: "https://poorvank-shah.github.io/covid-19_awareness/",
  // },
  // {
  //   id: 10,
  //   title: "Gossip",
  //   description: "Multipage video calling webapp with smooth animation",
  //   image: "/images/projects/10.png",
  //   tag: ["All", "Javascript"],
  //   gitUrl: "https://github.com/Poorvank-Shah/GossiPP",
  //   previewUrl: "https://poorvank-shah.github.io/GossiPP/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const deltaX = startX - currentX;
    containerRef.current.scrollLeft = scrollLeft + deltaX;
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div
        ref={containerRef}
        className="text-white flex flex-row overflow-x-auto gap-2 my-6 pb-5 sm:justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Node"
          isSelected={tag === "Node"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Javascript"
          isSelected={tag === "Javascript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-11 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
