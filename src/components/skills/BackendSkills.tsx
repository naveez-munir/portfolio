import React from "react";
import Logo07 from "@/../public/images/icon-nestjs.svg";
import Logo08 from "@/../public/images/icon-nodejs.svg";
import Logo09 from "@/../public/images/icon-mongodb.svg";
import Logo10 from "@/../public/images/icon-express-js.svg";
import Logo11 from "@/../public/images/icon-mysql.svg";
import Logo12 from "@/../public/images/icon-postgresql.svg";
import { MidlineIcons } from "./MidLineIcons";
import { TopLineIcons } from "./TopLineIcons";
import { BottomLineIcons } from "./BottomLineIcons";

export const BackendSkills = () => {
  return (
    <>
      <MidlineIcons
        RightIcon={Logo11}
        LeftIcon={Logo10}
        LeftName="Express.js"
        RightName="MySql"
      />
      <TopLineIcons
        RightIcon={Logo09}
        LeftIcon={Logo08}
        LeftName="Node.js"
        RightName="MongoDb"
      />
      <BottomLineIcons
        RightIcon={Logo12}
        LeftIcon={Logo07}
        LeftName="Nest.js"
        RightName="PostgresSql"
      />
    </>
  );
};
