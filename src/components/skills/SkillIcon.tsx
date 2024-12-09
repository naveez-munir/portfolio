import Image, { StaticImageData } from "next/image";

interface SkillIconProps {
  src: StaticImageData;
  name: string;
  isSmallIcon?: boolean;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ src, name , isSmallIcon }) => {
  const size = isSmallIcon ? 'h-12 w-12 md:h-16 md:w-16' : 'h-16 w-16 md:h-20 md:w-20'
  return (
    <div className={`animate-[breath_7s_ease-in-out_2s_infinite_both]`}>
     <div className={`flex ${size} items-center justify-center rounded-full bg-white shadow-[0_2px_15px_var(--shadow-color)]  before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-accent before:bg-accent/30 before:[mask-image:linear-gradient(to_bottom,black,transparent)]`}>
       <Image
         className="relative"
         src={src}
         width={size.includes("h-12") ? 20 : 33}
         height={size.includes("h-12") ? 20 : 22}
         alt={name}
       />
       <span className="absolute -bottom-6 text-sm font-medium text-foreground">
         {name}
       </span>
     </div>
   </div>
  );
};
