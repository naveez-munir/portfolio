import React from "react";
import ReactIcon from "@/../public/images/react_icon.svg";
import HtmlIcon from "@/../public/images/html_icon.svg";
import TsIcon from "@/../public/images/typescript.svg";
import CssIcon from "@/../public/images/css_icon.svg";
import NextJsIcon from "@/../public/images/nextjs.svg";
import JsIcon from "@/../public/images/javascript.svg";
import TailwindIcon from "@/../public/images/icon-tailwind-css.svg";
import ShadCnIcon from "@/../public/images/shadcn.png";
import { MidlineIcons } from "./MidLineIcons";
import { TopLineIcons } from "./TopLineIcons";
import { BottomLineIcons } from "./BottomLineIcons";
import { SkillIcon } from "./SkillIcon";

export const FrontEndSkills = () => {
  return (
    <>
      <MidlineIcons
        RightIcon={CssIcon}
        LeftIcon={HtmlIcon}
        LeftName="HTML"
        RightName="CSS"
      />
      <TopLineIcons
        RightIcon={NextJsIcon}
        LeftIcon={ReactIcon}
        LeftName="React"
        RightName="Next.js"
      />
      <BottomLineIcons
        RightIcon={TsIcon}
        LeftIcon={JsIcon}
        LeftName="JavaScript"
        RightName="TypeScript"
      />
      <div className="absolute -translate-x-[292px] hidden sm:block">
        <SkillIcon
         src={TailwindIcon}
         name="Tailwind"
         isSmallIcon={true}
        />
      </div>
      <div className="absolute translate-x-[292px] hidden sm:block">
      <SkillIcon
         src={ShadCnIcon}
         name="Shadcn"
         isSmallIcon={true}
        />
      </div>
    </>
  );
};
