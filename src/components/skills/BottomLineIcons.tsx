import { SkillIcon } from "./SkillIcon";
import { SkillLineIconProps } from "@/types/skills";

export const BottomLineIcons: React.FC<SkillLineIconProps> = ({ LeftIcon, RightIcon, LeftName, RightName }) => {
  return (
    <>
    <div className="absolute -translate-x-[160px] md:-translate-x-[216px] translate-y-[82px]">
        <SkillIcon
          src={LeftIcon}
          name={LeftName}
          isSmallIcon={true}
        />
      </div>
      <div className="absolute translate-x-[160px] md:translate-x-[216px] translate-y-[82px]">
        <SkillIcon
          src={RightIcon}
          name={RightName}
          isSmallIcon={true}
        />
      </div>
      </>
  );
};
