import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import ProjectCard from './ProjectCard';
import { SCREENS } from "@/utils/breakpoints";
import { projectsData } from '@/data/projectsData';

function BrandingPanel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isDesktop = useMedia(`(min-width: ${SCREENS.xl})`, false);
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    setMobileView(!isDesktop);
  }, [isDesktop]);
  const projects = projectsData;


  const getVisibility = (index: number) => {
    if (index === hoveredIndex) return true;

    if (hoveredIndex === null) return true;

    const hoveredRow = Math.floor(hoveredIndex / 3) + 1;
    const hoveredColumn = (hoveredIndex % 3) + 1;
    const currentRow = Math.floor(index / 3) + 1;
    const currentColumn = (index % 3) + 1;

    const hoveredColumns =
      hoveredColumn === 3 ? [2, 3] : [hoveredColumn, hoveredColumn + 1];

    return !(
      (hoveredRow === currentRow || Math.abs(hoveredRow - currentRow) === 1) &&
      hoveredColumns.includes(currentColumn)
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1 md:gap-2 justify-center w-[318.2px] sm:w-auto mx-auto sm:max-xl:mx-6 ">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isHovered={index === hoveredIndex}
          hoveredColumn={hoveredIndex && (hoveredIndex % 3) + 1}
          rowIndex={Math.floor(index / 3) + 1}
          isVisible={getVisibility(index)}
          onMouseEnter={!mobileView ? () => setHoveredIndex(index) : undefined}
          onMouseLeave={!mobileView ? () => setHoveredIndex(null) : undefined}
        />
      ))}
    </div>
  );
}

export default BrandingPanel;
