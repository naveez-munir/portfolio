export type ProjectCardProps = {
  logo: string;
  hoverLogo: string;
  alt: string;
  width: number;
  mobileWidth: number;
  height: number;
  mobileHeight: number;
  isVisible: boolean;
  isHovered: boolean;
  rowIndex: number;
  hoveredColumn: number | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  slug: string;
};

export interface Company {
  slug: string;
  logo: string;
  backgroundImage: string;
  heading?: string;
  subText: string;
  logoMobileWidth: number;
  logoMobileHeight: number;
  logoWidth: number;
  logoHeight: number;
  gradientColor: string;
  firstHeading: string;
  firstText: string;
  secondHeading?: string;
  secondText?: string;
  thirdHeading?: string;
  thirdText?: string;
  fourthHeading?: string;
  fourthText?: string;
  fifthHeading?: string;
  fifthText?: string;
  sixthHeading?: string;
  sixthText?: string;
  seventhHeading?: string;
  seventhText?: string;
  eighthHeading?: string;
  eighthText?: string;
  ninthHeading?: string;
  ninthText?: string;
}
