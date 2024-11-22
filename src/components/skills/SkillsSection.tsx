import Image from "next/image";
import React from "react";
import {
  backendSkills,
  frontendSkills,
  fullStackSkills,
} from "@/data/skillsData";
import { SkillsSectionProps } from "@/types/skills";

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  selectedTab,
}) => {
  const getSkills = () => {
    switch (selectedTab) {
      case 0:
        return frontendSkills;
      case 1:
        return backendSkills;
      default:
        return fullStackSkills;
    }
  };
  const skills = getSkills();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {skills.map((skill, index) => (
        <div key={index} className={`absolute ${skill.position}`}>
          <div
            className={`animate-[breath_6s_ease-in-out_${skill.delay}_infinite_both]`}
          >
            <div
              className={`flex ${
                skill.size
              } items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] relative ${
                skill.opacity === "40" ? "border border-gray-200/60" : ""
              } before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]`}
            >
              <Image
                className="relative"
                src={skill.logo}
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
      ))}
    </div>
  );
};
