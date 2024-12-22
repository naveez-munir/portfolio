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
  "Frontend Engineer",
  "Backend Engineer",
  "Full Stack Developer",
 ];

 export const links: LinkItem[] = [
  {
    href: "#contact",
    icon: Mail,
    text: "Let's talk",
    primary: true,
  },
  {
    href: "https://drive.google.com/file/d/1HMnLbtve9g8sGuW1gcPl2oLoUOEb4lwe/view",
    text: "Resume",
  },
  {
    href: "https://github.com/naveez-munir",
    icon: Github,
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/naveez-munir-08660517b/",
    icon: Linkedin,
    text: "LinkedIn",
  },
];
