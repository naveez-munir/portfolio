import { SkillIcon } from "./SkillIcon";
import { SkillLineIconProps } from "@/types/skills";

export const MidlineIcons: React.FC<SkillLineIconProps> = ({ LeftIcon, RightIcon, LeftName, RightName }) => {
  return (
    <>
    <div className="absolute -translate-x-[95px] md:-translate-x-[136px]">
        <SkillIcon
          src={LeftIcon}
          name={LeftName}
          isSmallIcon={true}
        />
      </div>
      <div className="absolute translate-x-[95px] md:translate-x-[136px]">
        <SkillIcon
          src={RightIcon}
          name={RightName}
          isSmallIcon={true}
        />
      </div>
      </>
  );
};
