import { SkillIcon } from "./SkillIcon";
import { SkillLineIconProps } from "@/types/skills";

export const TopLineIcons: React.FC<SkillLineIconProps> = ({ LeftIcon, RightIcon, LeftName, RightName }) => {
  return (
    <>
    <div className="absolute -translate-x-[160px] md:-translate-x-[216px] -translate-y-[82px]">
        <SkillIcon
          src={LeftIcon}
          name={LeftName}
        />
      </div>
      <div className="absolute -translate-y-[82px] translate-x-[160px] md:translate-x-[216px]">
        <SkillIcon
          src={RightIcon}
          name={RightName}
        />
      </div>
      </>
  );
};