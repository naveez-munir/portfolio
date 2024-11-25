import React from "react";

export const VerticalLines = () => {
  return (
    <>
      <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[140px] md:-translate-x-[216px] bg-gradient-to-b from-borderColor to-transparent mix-blend-multiply"></div>
      <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[140px] md:translate-x-[216px] bg-gradient-to-t from-borderColor to-transparent mix-blend-multiply"></div>
    </>
  );
};
