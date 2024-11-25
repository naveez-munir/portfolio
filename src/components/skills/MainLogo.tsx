import Image from 'next/image';
import React from 'react';
import Logo01 from "@/../public/images/logo-01.svg";

export const MainLogo = () => {
  return (
    <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,theme(colors.accent))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
     <div className="animate-[breath_8s_ease-in-out_infinite_both]">
       <div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full bg-background shadow-custom before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-borderColor before:bg-borderColor/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
         <Image
           className="relative"
           src={Logo01}
           width={32}
           height={32}
           alt="Logo 01"
         />
       </div>
     </div>
   </div>
  );
}
