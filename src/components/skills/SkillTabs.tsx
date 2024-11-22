import React from "react";
import { Code, Server, Database, Cloud } from "lucide-react";

interface SkillTabsProps {
  onTabChange: (index: number) => void;
  selectedTab: number;
}

export const SkillTabs: React.FC<SkillTabsProps> = ({ onTabChange, selectedTab }) => {

  const tabs = [
    { name: "Frontend", icon: <Code size={16} />, color: "text-blue-500" },
    { name: "Backend", icon: <Server size={16} />, color: "text-green-500" },
    {
      name: "Full Stack",
      icon: <Database size={16} />,
      color: "text-purple-500",
    },
    // { name: "AWS/Cloud", icon: <Cloud size={16} />, color: "text-orange-500" },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-12 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg">
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(index)}
            className={`flex h-8 items-center gap-2.5 rounded-lg px-3 text-sm font-medium transition-colors mx-1
              ${
                selectedTab === index
                  ? "bg-gray-800 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <span className={tab.color}>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
