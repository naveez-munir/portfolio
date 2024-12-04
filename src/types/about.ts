import { LucideIcon } from 'lucide-react';
export interface TypewriterEffectProps {
  words: string[];
  loop?: boolean;
 }

 export interface SkillBadgeProps {
  skill: string;
 }

 export interface LinkItem {
  href: string;
  icon?: LucideIcon;
  text: string;
  primary?: boolean;
}
