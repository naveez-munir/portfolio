"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeButton } from "./ThemeButton";
import { ThemeDropdown } from "./ThemeDropdown";
import { getThemeIcon } from "./themeUtils";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <ThemeButton
        icon={getThemeIcon(resolvedTheme)}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      {dropdownOpen && <ThemeDropdown onSelectTheme={handleThemeChange} />}
    </div>
  );
}
