import { SkillBadgeProps } from '@/types/about';

export const SkillBadge = ({ skill }: SkillBadgeProps) => (
 <div className="px-4 py-2 rounded-full border border-accent text-sm font-medium hover:bg-accent hover:text-background transition-colors duration-300">
   {skill}
 </div>
);
