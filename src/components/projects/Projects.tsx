"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useMedia } from "react-use";

const SCREENS = {
  sm: "600px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isDesktop = useMedia(`(min-width: ${SCREENS.xl})`);
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    setMobileView(!isDesktop);
  }, [isDesktop]);

  const projects = [
    {
      id: 1,
      title: "GroovePacker",
      image: "/project-images/groovepacker.png",
      description:
        "Enhanced UI and ensured seamless user experience while improving maintainability.",
      details: [
        "Designed and implemented new UI features",
        "Increased test coverage to 80% with Jest and Enzyme",
        "Optimized deployment pipelines",
        "Resolved critical bugs ensuring stability",
      ],
      technologies: ["React Native", "Rails", "Jest", "Enzyme"],
      date: "Ongoing",
      width: 211,
      height: 80,
      mobileWidth: 115,
      mobileHeight: 44,
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 2,
      title: "Hunt Wallet",
      image: "/project-images/huntwallet.png",
      description:
        "Enhanced functionality and deployed stable apps for hunters using Expo and Next.js",
      details: [
        "Implemented features for improved planning",
        "Resolved bugs for seamless experience",
        "Streamlined app store deployment",
      ],
      technologies: ["Expo", "React Native", "Next.js"],
      date: "2024",
      width: 202,
      height: 35,
      mobileWidth: 110,
      mobileHeight: 19,
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 3,
      title: "Leaf Cloud",
      image: "/project-images/leafcloud.png",
      description:
        "Built scalable serverless solutions with Next.js, TailwindCSS, and AWS",
      details: [
        "Developed serverless backend",
        "Designed landing pages and UI",
        "Integrated authentication and payments",
      ],
      technologies: ["Next.js", "AWS", "TailwindCSS", "Stripe"],
      date: "2023",
      width: 79,
      height: 81,
      mobileWidth: 43,
      mobileHeight: 44,
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 4,
      title: "Discord Bot",
      image: "/project-images/discordbot.png",
      description:
        "Automated attendance tracking and reporting for Discord users",
      details: [
        "Automated daily tracking",
        "Integrated time reports",
        "Scalable data storage",
      ],
      technologies: ["Nest.js", "PostgreSQL", "Discord.js"],
      date: "2022",
      width: 138,
      height: 50,
      mobileWidth: 75,
      mobileHeight: 27,
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 5,
      title: "Payroll System",
      image: "/project-images/payroll.png",
      description: "Comprehensive payroll management system with MERN stack",
      details: [
        "CI/CD pipelines",
        "Automated deployment",
        "Email notifications",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      date: "2022",
      width: 200,
      height: 63,
      mobileWidth: 109,
      mobileHeight: 34,
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 6,
      title: "AI Chat App",
      image: "/project-images/aichat.png",
      description:
        "Integrated OpenAI's ChatGPT API for conversational features",
      details: ["AI interactions", "Real-time chat", "OpenAI integration"],
      technologies: ["Node.js", "React", "OpenAI API"],
      date: "2023",
      width: 91,
      height: 89,
      mobileWidth: 50,
      mobileHeight: 49,
      liveLink: "#",
      sourceLink: "#",
    },
  ];

  const getVisibility = (index: number) => {
    if (index === hoveredIndex) return true;
    if (hoveredIndex === null) return true;

    const hoveredRow = Math.floor(hoveredIndex / 3) + 1;
    const hoveredColumn = (hoveredIndex % 3) + 1;
    const currentRow = Math.floor(index / 3) + 1;
    const currentColumn = (index % 3) + 1;

    const hoveredColumns =
      hoveredColumn === 3 ? [2, 3] : [hoveredColumn, hoveredColumn + 1];

    return !(
      (hoveredRow === currentRow || Math.abs(hoveredRow - currentRow) === 1) &&
      hoveredColumns.includes(currentColumn)
    );
  };

  return (
    <div className="py-16 px-4 bg-background">
      <h1 className="text-center text-4xl font-extrabold mb-12 text-white">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative group ${
              !getVisibility(index) ? "opacity-20" : ""
            }`}
            onMouseEnter={() => !mobileView && setHoveredIndex(index)}
            onMouseLeave={() => !mobileView && setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative rounded-lg overflow-hidden aspect-video bg-accent/5">
              {/* Default View */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-background/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-accent opacity-80">{project.date}</p>
              </div>

              {/* Hover View */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-6 bg-accent/90 backdrop-blur-sm
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <p className="text-sm text-white/80">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Link
                      href={project.liveLink}
                      className="text-sm text-white hover:text-white/80"
                    >
                      Live Demo →
                    </Link>
                    <Link
                      href={project.sourceLink}
                      className="text-sm text-white hover:text-white/80"
                    >
                      Source Code →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
