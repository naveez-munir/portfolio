import { ChevronDown } from "lucide-react";

interface ThemeButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}

export const ThemeButton = ({ icon, onClick }: ThemeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded bg-foreground text-background"
    >
      {icon}
      <ChevronDown />
    </button>
  );
};
