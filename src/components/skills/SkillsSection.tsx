import React from "react";
import { FrontEndSkills } from "./FrontEndSkills";
import { BackendSkills } from "./BackendSkills";
import { FullStackSkills } from "./FullStackSkill";

interface SkillsSectionProps {
  selectedTab: number;
 }

 export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedTab }) => {

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {selectedTab === 0 && <FrontEndSkills /> }
      {selectedTab === 1 && <BackendSkills /> }
      {selectedTab === 2 && <FullStackSkills /> }
    </div>
  );
};
