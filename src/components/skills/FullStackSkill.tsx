import React from "react";
import Logo01 from "@/../public/images/react_icon.svg";
import Logo05 from "@/../public/images/nextjs.svg";
import Logo07 from "@/../public/images/icon-nestjs.svg";
import Logo08 from "@/../public/images/icon-nodejs.svg";
import Logo13 from "@/../public/images/icon-expo.svg";
import Logo14 from "@/../public/images/icon-aws.svg";
import { MidlineIcons } from "./MidLineIcons";
import { TopLineIcons } from "./TopLineIcons";
import { BottomLineIcons } from "./BottomLineIcons";

export const FullStackSkills = () => {
  return (
    <>
      <MidlineIcons
        RightIcon={Logo08}
        LeftIcon={Logo01}
        LeftName="React.js"
        RightName="Node.js"
      />
      <TopLineIcons
        RightIcon={Logo07}
        LeftIcon={Logo05}
        LeftName="Next.js"
        RightName="Nest.js"
      />
      <BottomLineIcons
        RightIcon={Logo14}
        LeftIcon={Logo13}
        LeftName="Expo"
        RightName="AWS"
      />
    </>
  );
};
