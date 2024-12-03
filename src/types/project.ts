import { StaticImageData } from "next/image";

export type ProjectData = {
  id: number;
  src: StaticImageData;
  hoverSrc: StaticImageData;
  alt: string;
  width: number;
  mobileWidth: number;
  height: number;
  mobileHeight: number;
  gradientColor: string;
  slug: string;
  techStack: string[];
  duration: string;
  highlights: string[];
};

export type ProjectCardProps = {
  project: ProjectData;
  isVisible: boolean;
  isHovered: boolean;
  rowIndex: number;
  hoveredColumn: number | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
