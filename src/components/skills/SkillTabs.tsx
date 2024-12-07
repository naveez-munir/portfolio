import React from "react";
import { skillTabData } from "@/data/skillsData";

interface SkillTabsProps {
  onTabChange: (index: number) => void;
  selectedTab: number;
}

export const SkillTabs: React.FC<SkillTabsProps> = ({
  onTabChange,
  selectedTab,
}) => {
  const tabs = skillTabData;

  return (
    <div className="flex justify-center">
      <div
        className={`relative mb-12 inline-flex flex-wrap justify-center rounded-xl p-2 shadow-lg bg-[var(--background)]`}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(index)}
            className={`flex h-8 items-center gap-2.5 rounded-lg px-3 text-sm font-medium transition-colors mx-1
              ${
                selectedTab === index
                  ? "bg-[var(--accent)] text-[var(--background)]"
                  : "text-[var(--foreground)] hover:bg-[var(--border-color)]"
              }`}
          >
            <span style={{ color: "var(--accent)" }}>
              {" "}
              <tab.icon size={16} />
            </span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
