"use client"

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Profile from "@/../public/images/naveezpic.png";
import { links, skills, typewriterWords } from "@/data/about";
import { SkillBadge } from "./SkillBadge";
import { TypewriterEffect } from "./TypewriterEffect";

export const AboutMe: React.FC = () => {

  return (
    <div id="about" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                className="w-72 h-72 mx-auto rounded-full object-cover shadow-lg
                         border-2 border-accent"
                src={Profile}
                alt="profile"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-left text-5xl font-bold mb-16 text-foreground">
                ABOUT ME
              </h1>
              <div className="text-3xl font-semibold text-foreground">
                Hi there! I am{" "}
                <span className="text-accent">
                  <TypewriterEffect
                    words={typewriterWords}
                  />
                </span>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                A passionate Software Engineer and Full Stack Developer (MERN)
                with expertise in AWS Cloud. I transform ideas into scalable
                solutions, bringing innovation to every project I tackle.
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                      transition-colors duration-300 ${
                        link.primary
                          ? "bg-accent text-background hover:bg-accent/90"
                          : "border-2 border-accent text-foreground hover:bg-accent hover:text-background"
                      }`}
                  >
                    {link.icon && <link.icon className="w-4 h-4"/> || <ExternalLink className="w-4 h-4" />}{" "}
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
