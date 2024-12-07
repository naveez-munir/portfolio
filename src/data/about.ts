import { LinkItem } from "@/types/about";
import { Mail , Github , Linkedin} from "lucide-react";

export const skills: string[] = [
  "React.js",
  "Next.js",
  "Vanilla js",
  "TypeScript",
  "Expo",
  "React Native",
  "HTML",
  "CSS",
  "Shadcn",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Jest",
  "Enzyme",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Git",
  "AWS Cloud",
  "CI/CD",
  "Slack",
  "Jira",
  "Vercel"
 ];

 export const typewriterWords = [
  "Naveez Munir",
  "Software Engineer",
  "Full Stack Developer",
  "an AWS Expert"
 ];

 export const links: LinkItem[] = [
  {
    href: "#contact",
    icon: Mail,
    text: "Let's talk",
    primary: true,
  },
  {
    href: "https://drive.google.com/file/d/1QU71Lh49DjFdXM_3wMd1yCRyipR7uPNW/view",
    text: "Resume",
  },
  {
    href: "https://github.com/Naveez67",
    icon: Github,
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/naveez-ahmad-08660517b/",
    icon: Linkedin,
    text: "LinkedIn",
  },
];
