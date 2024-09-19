"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const projectsData = [
  {
    title: "MERN Stack Project",
    date: "05/10/2021",
    description:
      "Built a full-stack web application with React, Node.js, Express, and MongoDB.",
    details: [
      "User Authentication and Authorization",
      "Responsive Frontend built with React",
      "Backend powered by Express and MongoDB",
    ],
    liveLink: "https://mern-ecommerce-example.com",
    sourceLink: "https://github.com/user/mern-ecommerce",
  },
  {
    title: "Nest.js API Development",
    date: "12/03/2022",
    description: "Developed a RESTful API using Nest.js with TypeScript.",
    details: [
      "Implemented various endpoints with Nest.js",
      "Database integration with PostgreSQL",
      "Used JWT for authentication",
    ],
    liveLink: "https://nestjs-api-example.com",
    sourceLink: "https://github.com/user/nestjs-api",
  },
  {
    title: "Next.js with Serverless Backend",
    date: "20/09/2023",
    description: "Developed a serverless app using Next.js and AWS Lambda.",
    details: [
      "Built with Next.js for SSR",
      "Serverless API using AWS Lambda",
      "Integrated with DynamoDB for data persistence",
    ],
    liveLink: "https://nextjs-serverless-example.com",
    sourceLink: "https://github.com/user/nextjs-serverless",
  },
];

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const { theme } = useTheme();

  const handleToggle = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div id="projects" className="py-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">PROJECTS</h1>

      <div className="space-y-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center md:items-start`}
          >
            {/* Project Content */}
            <div className="w-full md:w-1/2 p-4 bg-foreground text-background rounded-lg shadow-md">
              <h3 className="text-lg font-semibold ">{project.title}</h3>
              <p className="text-sm mt-2">{project.date}</p>
              <p className="mt-2">{project.description}</p>

              <button
                onClick={() => handleToggle(index)}
                className="px-6 py-2 border-2 border-accent text-background font-semibold rounded-lg shadow-md hover:text-foreground hover:bg-accent"
              >
                {isOpen === index
                  ? "Hide Project Details"
                  : "Show Project Details"}
              </button>

              {isOpen === index && (
                <div className="mt-4">
                  <ul className="list-disc pl-5">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="mt-4 flex justify-between">
                <Link href={project.liveLink}>SEE LIVE</Link>
                <Link href={project.sourceLink}>SOURCE CODE</Link>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="hidden md:block w-1 bg-gray-300 h-40 md:h-full mx-4"></div>

            {/* Timeline Marker */}
            <div
              className={`w-8 h-8 rounded-full bg-${
                theme === "dark" ? "white" : "gray-900"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
