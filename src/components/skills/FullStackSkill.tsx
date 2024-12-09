import React from "react";
import ReactIcon from "@/../public/images/react_icon.svg";
import NextJsIcon from "@/../public/images/nextjs.svg";
import NestJsIcon from "@/../public/images/icon-nestjs.svg";
import NodeJsIcon from "@/../public/images/icon-nodejs.svg";
import ExpoIcon from "@/../public/images/icon-expo.svg";
import AwsIcon from "@/../public/images/icon-aws.svg";
import { MidlineIcons } from "./MidLineIcons";
import { TopLineIcons } from "./TopLineIcons";
import { BottomLineIcons } from "./BottomLineIcons";

export const FullStackSkills = () => {
  return (
    <>
      <MidlineIcons
        RightIcon={NodeJsIcon}
        LeftIcon={ReactIcon}
        LeftName="React.js"
        RightName="Node.js"
      />
      <TopLineIcons
        RightIcon={NestJsIcon}
        LeftIcon={NextJsIcon}
        LeftName="Next.js"
        RightName="Nest.js"
      />
      <BottomLineIcons
        RightIcon={AwsIcon}
        LeftIcon={ExpoIcon}
        LeftName="Expo"
        RightName="AWS"
      />
    </>
  );
};
