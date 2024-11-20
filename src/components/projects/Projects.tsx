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

    const hoveredRow = Math.floor(hoveredIndex / 4) + 1;
    const hoveredColumn = (hoveredIndex % 4) + 1;
    const currentRow = Math.floor(index / 4) + 1;
    const currentColumn = (index % 4) + 1;

    const hoveredColumns =
      hoveredColumn === 4 ? [3, 4] : [hoveredColumn, hoveredColumn + 1];

    return !(
      (hoveredRow === currentRow || Math.abs(hoveredRow - currentRow) === 1) &&
      hoveredColumns.includes(currentColumn)
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 justify-center w-[318.2px] sm:w-auto mx-auto sm:max-xl:mx-6 ">
      {ProjectsData.map((project, index) => (
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
          hoveredColumn={hoveredIndex && (hoveredIndex % 4) + 1}
          rowIndex={Math.floor(index / 4) + 1}
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
