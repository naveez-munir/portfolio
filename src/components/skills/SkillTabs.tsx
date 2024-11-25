import React from "react";
import { Code, Server, Database, Cloud } from "lucide-react";

interface SkillTabsProps {
  onTabChange: (index: number) => void;
  selectedTab: number;
 }

 export const SkillTabs: React.FC<SkillTabsProps> = ({ onTabChange, selectedTab}) => {
  const tabs = [
    { name: "Frontend", icon: <Code size={16} />, color: "var(--accent)" },
    { name: "Backend", icon: <Server size={16} />, color: "var(--accent)" },
    { name: "Full Stack", icon: <Database size={16} />, color: "var(--accent)" },
  ];

  return (
    <div className="flex justify-center">
      <div className={`relative mb-12 inline-flex flex-wrap justify-center rounded-xl p-2 shadow-lg bg-[var(--background)]`}>
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(index)}
            className={`flex h-8 items-center gap-2.5 rounded-lg px-3 text-sm font-medium transition-colors mx-1
              ${selectedTab === index
                ? "bg-[var(--accent)] text-[var(--background)]"
                : "text-[var(--foreground)] hover:bg-[var(--border-color)]"
              }`}
          >
            <span style={{ color: tab.color }}>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
 };
