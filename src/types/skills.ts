import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type SkillsSectionProps = {
  selectedTab : number
}

export type SkillTabs = {
  name: string,
  icon: LucideIcon,
}

export type SkillLineIconProps = {
  LeftIcon: StaticImageData;
  RightIcon: StaticImageData;
  LeftName:  string;
  RightName: string;
}
