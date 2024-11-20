import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import { SCREENS } from "@/utils/breakpoints";
import { ProjectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
function BrandingPanel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isDesktop = useMedia(`(min-width: ${SCREENS.xl})`);
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    setMobileView(!isDesktop);
  }, [isDesktop]);

  const getVisibility = (index: number) => {
    if (index === hoveredIndex) return true;
    if (hoveredIndex === null) return true;

    const totalColumns = 3;
    const hoveredRow = Math.floor(hoveredIndex / totalColumns);
    const hoveredColumn = hoveredIndex % totalColumns;
    const currentRow = Math.floor(index / totalColumns);
    const currentColumn = index % totalColumns;
    if (hoveredColumn === totalColumns - 1) {
      return !(
        currentColumn === hoveredColumn - 1 &&
        Math.abs(currentRow - hoveredRow) <= 1
      );
    }

    return !(
      Math.abs(currentRow - hoveredRow) <= 1 &&
      (currentColumn === hoveredColumn || currentColumn === hoveredColumn + 1)
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:gap-2 justify-center w-[318.2px] sm:w-auto mx-auto sm:max-xl:mx-6">
      {ProjectsData.slice(0, 6).map((project, index) => (
        <ProjectCard
          key={project.id}
          logo={project.src}
          hoverLogo={project.hoverSrc}
          alt={project.alt}
          width={project.width}
          mobileWidth={project.mobileWidth}
          height={project.height}
          mobileHeight={project.mobileHeight}
          isHovered={index === hoveredIndex}
          hoveredColumn={hoveredIndex !== null ? (hoveredIndex % 3) + 1 : null}
          rowIndex={Math.floor(index / 3) + 1}
          isVisible={getVisibility(index)}
          onMouseEnter={!mobileView ? () => setHoveredIndex(index) : undefined}
          onMouseLeave={!mobileView ? () => setHoveredIndex(null) : undefined}
          slug={project.slug}
        />
      ))}
    </div>
  );
}

export default BrandingPanel;
