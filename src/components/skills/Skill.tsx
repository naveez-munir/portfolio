"use client";
import React, { useState } from "react";
import { MainGlow } from "./MainGlow";
import { SmallDots } from "./SmallDots";
import { HorizontalLines } from "./HorizontalLines";
import { DiagonalLines } from "./DiagonalLines";
import { VerticalLines } from "./VerticalLines";
import { MainLogo } from "./MainLogo";
import {SkillTabs} from "./SkillTabs";
import { SkillsSection } from "./SkillsSection";
export const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SkillTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
        <div className="relative flex h-[324px] items-center justify-center">
          <SmallDots />
          <MainGlow />
          <HorizontalLines />
          <DiagonalLines />
          <VerticalLines />
          <MainLogo />
          <div className="relative flex flex-col">
            <SkillsSection  selectedTab={selectedTab}/>
          </div>
        </div>
      </div>
    </section>
  )};

export default Skills;

