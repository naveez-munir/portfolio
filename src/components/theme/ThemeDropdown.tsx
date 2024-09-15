import { Sun, Moon, Sunset, CloudRain } from "lucide-react";
import React from "react";

interface ThemeDropdownProps {
  onSelectTheme: (theme: string) => void;
}

const themes = [
  { key: "light", icon: <Sun />, label: "Light" },
  { key: "dark", icon: <Moon />, label: "Dark" },
  { key: "sunset", icon: <Sunset />, label: "Sunset" },
  { key: "oceanic", icon: <CloudRain />, label: "Oceanic" },
];

export const ThemeDropdown = ({ onSelectTheme }: ThemeDropdownProps) => {
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-foreground shadow-lg">
      <ul className="flex flex-col p-2">
        {themes.map(({ key, icon, label }) => (
          <li key={key}>
            <button
              onClick={() => onSelectTheme(key)}
              className="flex items-center gap-2 px-4 py-2 text-background hover:bg-background/30"
            >
              {icon}
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
