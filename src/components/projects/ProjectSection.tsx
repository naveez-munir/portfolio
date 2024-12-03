"use client";
import React from "react";
import BrandingPanel from "./Projects";

const Projects: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto mt-10">
      <div className="text-center mb-16">
        <h3 className="text-accent text-sm font-medium uppercase tracking-wider">
          FEATURED PROJECTS
        </h3>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-foreground">
          Crafting Digital Excellence
          <br />
          One Project at a Time
        </h2>
      </div>
      <BrandingPanel />
    </div>
  );
};

export default Projects;
