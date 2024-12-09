import React from "react";
import NestJsIcon from "@/../public/images/icon-nestjs.svg";
import NodejsIcon from "@/../public/images/icon-nodejs.svg";
import MongoDbIcon from "@/../public/images/icon-mongodb.svg";
import ExpressIcon from "@/../public/images/icon-express-js.svg";
import MySqlIcon from "@/../public/images/icon-mysql.svg";
import PostGresIcon from "@/../public/images/icon-postgresql.svg";
import { MidlineIcons } from "./MidLineIcons";
import { TopLineIcons } from "./TopLineIcons";
import { BottomLineIcons } from "./BottomLineIcons";

export const BackendSkills = () => {
  return (
    <>
      <MidlineIcons
        RightIcon={MySqlIcon}
        LeftIcon={ExpressIcon}
        LeftName="Express.js"
        RightName="MySql"
      />
      <TopLineIcons
        RightIcon={MongoDbIcon}
        LeftIcon={NodejsIcon}
        LeftName="Node.js"
        RightName="MongoDb"
      />
      <BottomLineIcons
        RightIcon={PostGresIcon}
        LeftIcon={NestJsIcon}
        LeftName="Nest.js"
        RightName="PostgresSql"
      />
    </>
  );
};
