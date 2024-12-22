import Image from "next/image";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import Link from "next/link";
import styles from "./project.module.css";
import { SCREENS } from "@/utils/breakpoints";
import { ProjectCardProps } from "@/types/project";

function getStartColumn(hoveredColumn: number | null) {
  if (hoveredColumn === 2 || hoveredColumn === 3) return styles.startColumn2;
  return "";
}

function ProjectCard({
  project,
  isVisible,
  isHovered,
  hoveredColumn,
  rowIndex,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  const isDesktop = useMedia(`(min-width: ${SCREENS.md})`, false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(!isDesktop);
  }, [isDesktop]);

  const scaleClass = isHovered
    ? "row-span-2 col-span-2"
    : "row-span-1 col-span-1";
  const rowStyle =
    isHovered && rowIndex === 2
      ? `row-start-1 ${getStartColumn(hoveredColumn)}`
      : "";
  return (
    <Link
      href={`#`}
      className={`group flex items-center justify-center rounded-lg transition-all duration-500 cursor-pointer ${rowStyle} ${scaleClass} ${
        isVisible ? "" : "hidden"
      } ${isHovered ? "" : "h-[157.5px] md:h-[230px] lg:h-[287.6px]"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered ? (
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.hoverSrc}
            alt={project.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

          {/* Project Header */}
          <div className="absolute top-4 left-4 right-4">
            <div className="bg-black/40 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <Image
                  src={project.src}
                  alt="Overlay Logo"
                  width={project.width}
                  height={project.height}
                  priority
                />
                <h1 className="text-white font-bold text-5xl ml-2">
                  {project.alt}
                </h1>
              </div>
              <p className="text-white/90 text-sm font-medium mt-2 ml-16">
                {project?.duration}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/10 rounded-full text-white/90 text-xs font-medium hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights?.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-accent">•</span>
                    <span className="text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Image
            src={project.src}
            alt={project.alt}
            width={isMobile ? project.mobileWidth : project.width}
            height={isMobile ? project.mobileHeight : project.height}
            priority
          />
          <span className="text-foreground text-sm font-medium uppercase tracking-wider">
            {project.alt}
          </span>
        </div>
      )}
    </Link>
  );
}

export default ProjectCard;
