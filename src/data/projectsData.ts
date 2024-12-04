import { ProjectData } from "@/types/project";
import LogoGroovePacker from '@/../public/images/G_Ex_icon.png';
import BgGroovePacker from '@/../public/images/groovepacker.webp';
import LogoHuntWallet from '@/../public/images/huntWalletLogo.png';
import BgHuntWallet from '@/../public/images/huntwallet.jpg';
import LogoLeafCloud from '@/../public/images/leafcloude.svg';
import BgLeafCloud from '@/../public/images/leafCloudeBg.jpg';
import LogoPms from '@/../public/images/pmsLogo.svg';
import BgPms from '@/../public/images/payrollbg.avif';
import LogoRio from '@/../public/images/rioLogo.svg';
import BgRio from '@/../public/images/discord.avif';
import LogoChatApp from '@/../public/images/chatAppLogo.svg';
import BgChatApp from '@/../public/images/chatappBg.avif';

export const projectsData: ProjectData[] = [
  {
    id: 1,
    src: LogoGroovePacker,
    hoverSrc: BgGroovePacker,
    alt: 'Groove Packer',
    width: 200,
    height: 80,
    mobileWidth: 115,
    mobileHeight: 44,
    gradientColor: 'rgba(254, 107, 1, 0), #fe6b01',
    slug: 'groovePacker',
    techStack: ['Expo', 'React Native','Jest' ,'Rails', 'Node.js', 'Aws', 'Vercel'],
    duration: '2022-2023',
    highlights: [
      'Optimized and Refactored Code: Improved code efficiency and maintainability by refactoring existing code.',
      'Increased Test Coverage to 80%: Implemented unit and integration tests using Jest and Enzyme to ensure code reliability',
      'Handled Deployment Pipeline: Managed automated deployment pipeline for smooth production releases.',
      'Identified and resolved high-priority bugs, ensuring system stability',
      'Enhanced UI with New Features: Added and improved UI components for a better user experience.',
    ]
  },
  {
    id: 2,
    src: LogoHuntWallet,
    hoverSrc: BgHuntWallet,
    alt: 'Hunt Wallet',
    width: 200,
    height: 80,
    mobileWidth: 110,
    mobileHeight: 19,
    gradientColor: 'rgba(4, 178, 244, 0), #04b2f4',
    slug: 'huntWallet',
    techStack: ['Expo', 'React Native', 'Next.js'],
    duration: '2022-2023',
    highlights: [
      'Implemented new features',
      'Enhanced app stability',
      'Streamlined app store deployment'
    ]
  },
  {
    id: 3,
    src: LogoLeafCloud,
    hoverSrc: BgLeafCloud,
    alt: 'Leaf Cloud',
    width: 200,
    height: 80,
    mobileWidth: 43,
    mobileHeight: 44,
    gradientColor: 'rgba(245, 166, 35, 0), #f5a623',
    slug: 'leafCloud',
    techStack: ['Next.js', 'TailwindCSS', 'AWS Serverless', 'stripe','clerk auth'],
    duration: '2023-2024',
    highlights: [
      'Built serverless backend',
      'Implemented clerk auth',
      'Implemented stripe payment'
    ]
  },
  {
    id: 4,
    src: LogoPms,
    hoverSrc: BgPms,
    alt: 'PMS',
    width: 200,
    height: 80,
    mobileWidth: 75,
    mobileHeight: 27,
    gradientColor: 'rgba(14, 99, 244, 0), #0e63f4',
    slug: 'pms',
    techStack: ['MERN Stack','TailwindCSS', 'GitHub Actions', 'EC2'],
    duration: '2023-2024',
    highlights: [
      'Developed Payroll Management System: Created a comprehensive payroll management system for both admins and non-admin users, including salary management, leave, reimbursement, and loan request handling. ',
      'Built with MERN Stack: Developed the system using the MERN stack (MongoDB, Express, React, Node.js) to ensure scalability and responsiveness.',
      'CI/CD Implementation: Set up Continuous Integration and Continuous Deployment (CI/CD) pipelines to automate testing and streamline the deployment process.',
      'Automated Reporting System: Implemented an automated reporting feature for easy salary report generation and distribution of salary slips to employees.'
    ]
  },
  {
    id: 5,
    src: LogoRio,
    hoverSrc: BgRio,
    alt: 'Rio Bot',
    width: 200,
    height: 80,
    mobileWidth: 109,
    mobileHeight: 34,
    gradientColor: 'rgba(25, 175, 167, 0), #19afa7',
    slug: 'rioBot',
    techStack: ['Nest.js', 'PostgreSQL', 'Discord.js API','AWS EC2'],
    duration: '2023-2024',
    highlights: [
      'Automated Attendance Tracking: Developed a system for seamless, automatic attendance tracking.',
      'Leave Management System: Implemented a feature for users to request leaves and for admins to manage and approve requests',
      'Reporting Features: Integrated two types of reports for admin and non-admin users to enhance data visibility.',
      'Developed Discord Bot: Created and deployed a Discord bot to automate tasks and enhance user interaction.'
    ]
  },
  {
    id: 6,
    src: LogoChatApp,
    hoverSrc: BgChatApp,
    alt: 'AI Base Chat App',
    width: 200,
    height: 80,
    mobileWidth: 50,
    mobileHeight: 49,
    gradientColor: 'rgba(212, 152, 43, 0), #d4982b',
    slug: 'chatApp',
    techStack: ['Node.js', 'React', 'OpenAI API'],
    duration: '2023-2024',
    highlights: [
      'Integrated ChatGPT API',
      'Implemented AI interactions'
    ]
  },
];
