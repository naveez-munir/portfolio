import { Sun, Moon, Sunset, CloudRain } from "lucide-react";
import React from "react";

type IconType = React.ReactElement;

export const getThemeIcon = (resolvedTheme: string | undefined): IconType => {
  switch (resolvedTheme) {
    case "light":
      return <Sun />;
    case "dark":
      return <Moon />;
    case "sunset":
      return <Sunset />;
    case "oceanic":
      return <CloudRain />;
    default:
      return <Sun />;
  }
};
