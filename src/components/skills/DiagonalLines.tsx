import React from 'react'

export const DiagonalLines = () =>  {
  return (
    <>
      <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-borderColor to-transparent mix-blend-multiply"></div>
      <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-borderColor to-transparent mix-blend-multiply"></div>
    </>
  );
}
