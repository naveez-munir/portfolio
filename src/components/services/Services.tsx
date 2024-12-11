"use client"
import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Server, Cloud } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  technologies,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className="h-full p-8 rounded-2xl border border-foreground hover:border-background/30
                    transition-all duration-300 bg-background backdrop-blur-sm"
      >
        <div className="w-12 h-12 mb-6 text-accent">{icon}</div>

        <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>

        <p className="mb-6 text-foreground/80">{description}</p>

        <div className="mt-auto">
          <p className="text-sm text-foreground">
            <span>Technologies:</span> {technologies}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={36} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs with modern frameworks and best practices.",
      technologies: "React, Next.js, Tailwind CSS",
    },
    {
      icon: <Server size={36} />,
      title: "Backend Development",
      description:
        "Creating robust and scalable server-side solutions with high performance.",
      technologies: "Node.js, Nest.js, Express",
    },
    {
      icon: <Terminal size={36} />,
      title: "Full-Stack Development",
      description:
        "Delivering complete applications with seamless integration between frontend and backend.",
      technologies: "MERN, React, Next.js, Node.js",
    },
    {
      icon: <Cloud size={36} />,
      title: "Cloud Solutions",
      description:
        "Deploying and managing scalable cloud infrastructure and serverless applications.",
      technologies: "AWS, Lambda, DynamoDB",
    },
  ];

  return (
    <section
      id="services"
      className="w-full relative pt-10 pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-wider uppercase font-medium">
            SERVICES
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-foreground">
            What I Can Offer
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            From frontend to backend, I provide complete solutions with the
            latest technologies and best practices to ensure scalable and
            maintainable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
