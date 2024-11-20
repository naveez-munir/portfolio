import Image from "next/image";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import Link from "next/link";
import { SCREENS } from "@/utils/breakpoints";
import { ProjectCardProps, Company } from "@/types/projectCardProps";
import { getCompanyBySlug } from "@/utils";

function getStartColumn(hoveredColumn: number | null) {
  if (hoveredColumn === 2) return "start-column-2";
  if (hoveredColumn === 3) return "start-column-3";
  return "";
}

function ProjectCard({
  logo,
  hoverLogo,
  alt,
  width,
  mobileWidth,
  height,
  mobileHeight,
  isVisible,
  isHovered,
  hoveredColumn,
  rowIndex,
  onMouseEnter,
  onMouseLeave,
  slug,
}: ProjectCardProps) {
  const isDesktop = useMedia(`(min-width: ${SCREENS.md})`, false);
  const [isMobile, setIsMobile] = useState(false);
  const company: Company | undefined | null = slug
    ? getCompanyBySlug(slug)
    : null;

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
      href={`/work/${slug}`}
      className={`group bg-foreground flex items-center justify-center rounded-lg transition-all duration-500 cursor-pointer ${rowStyle} ${scaleClass} ${
        isVisible ? "" : "hidden"
      } ${isHovered ? "" : "h-[157.5px] md:h-[230px] lg:h-[287.6px]"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered ? (
        <div className="relative w-full h-full">
          <Image
            src={hoverLogo}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{
              background: `linear-gradient(to bottom, var(--accent), var(--foreground))`,
            }}
          />
          <div className="absolute top-4 left-8">
            <Image
              src={logo}
              alt="Overlay Logo"
              width={width}
              height={height}
              priority
            />
          </div>
          <div className="absolute bottom-16 left-8 text-white">
            <p className="text-sm font-normal">
              {company?.subText || "Company description"}
            </p>
          </div>
          <div className="absolute bottom-8 right-8">
            <Image
              src="/img/right_arrow.svg"
              alt="Arrow Icon"
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
      ) : (
        <Image
          src={logo}
          alt={alt}
          width={isMobile ? mobileWidth : width}
          height={isMobile ? mobileHeight : height}
          priority
        />
      )}
    </Link>
  );
}

export default ProjectCard;
