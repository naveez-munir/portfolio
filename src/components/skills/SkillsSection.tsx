import Image, { StaticImageData } from "next/image";
import React from "react";
import Logo01 from "@/../public/images/react_icon.svg";
import Logo02 from "@/../public/images/html_icon.svg";
import Logo03 from "@/../public/images/typescript.svg";
import Logo04 from "@/../public/images/css_icon.svg";
import Logo05 from "@/../public/images/nextjs.svg";
import Logo06 from "@/../public/images/javascript.svg";
import Logo07 from "@/../public/images/icon-nestjs.svg";
import Logo08 from "@/../public/images/icon-nodejs.svg";
import Logo09 from "@/../public/images/icon-mongodb.svg";
import Logo10 from "@/../public/images/icon-express-js.svg";
import Logo11 from "@/../public/images/icon-mysql.svg";
import Logo12 from "@/../public/images/icon-postgresql.svg";
import Logo13 from "@/../public/images/icon-expo.svg";
import Logo14 from "@/../public/images/icon-aws.svg";
import { backendSkills, frontendSkills, fullStackSkills } from "@/data/skillsData";

interface SkillsSectionProps {
  selectedTab: number;
 }

 export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedTab }) => {
  const getSkills = () => {
        switch(selectedTab) {
          case 0: return frontendSkills;
          case 1: return backendSkills;
          default: return fullStackSkills;
        }
      }

  const skills = getSkills()
  const logoMap: { [key: string]: StaticImageData } = {
    "HTML": Logo02,
    "CSS": Logo04,
    "React": Logo01,
    "JavaScript": Logo06,
    "TypeScript": Logo03,
    "Next.js": Logo05,
    "PostgresSql": Logo12,
    "Node js": Logo08,
    "Nest js": Logo07,
    "Express": Logo10,
    "MongoDb": Logo09,
    "MySql": Logo11,
    "AWS": Logo14,
    "Expo": Logo13,
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {skills.map((skill, index) => {
        const logo = logoMap[skill.name];
        return (
        <div key={index} className={`absolute ${skill.positionMobile} md:${skill.position}`}>
          <div
            className={`animate-[breath_6s_ease-in-out_${skill.delay}_infinite_both]`}
          >
            <div
              className={`flex ${skill.size} items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] relative ${
                skill.opacity === "40" ? "border border-gray-200/60" : ""
              } before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]`}
            >
              <Image
                className="relative"
                src={logo}
                width={skill.size === "h-12 w-12" ? 20 : 33}
                height={skill.size === "h-12 w-12" ? 20 : 22}
                alt={skill.name}
                priority
              />
              <span className="absolute -bottom-6 text-sm font-medium text-gray-600">
                {skill.name}
              </span>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
};
