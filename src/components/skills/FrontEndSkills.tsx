import React from "react";
import Logo01 from "@/../public/images/react_icon.svg";
import Logo02 from "@/../public/images/html_icon.svg";
import Logo03 from "@/../public/images/typescript.svg";
import Logo04 from "@/../public/images/css_icon.svg";
import Logo05 from "@/../public/images/nextjs.svg";
import Logo06 from "@/../public/images/javascript.svg";
import { MidlineIcons } from "./MidLineIcons";
import { TopLineIcons } from "./TopLineIcons";
import { BottomLineIcons } from "./BottomLineIcons";

export const FrontEndSkills = () => {
  return (
    <>
      <MidlineIcons
        RightIcon={Logo04}
        LeftIcon={Logo02}
        LeftName="HTML"
        RightName="CSS"
      />
      <TopLineIcons
        RightIcon={Logo05}
        LeftIcon={Logo01}
        LeftName="React"
        RightName="Next.js"
      />
      <BottomLineIcons
        RightIcon={Logo03}
        LeftIcon={Logo06}
        LeftName="JavaScript"
        RightName="TypeScript"
      />
    </>
  );
};
