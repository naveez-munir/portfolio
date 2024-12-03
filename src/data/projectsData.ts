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
    techStack: ['Expo', 'React Native', 'Rails', 'Node.js'],
    duration: '2022-2023',
    highlights: [
      'Enhanced UI with new features',
      'Optimized codebase',
      'Increased test coverage to 80%',
      'Handled deployment pipeline',
      'Resolved critical bugs'
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
    techStack: ['Next.js', 'TailwindCSS', 'AWS Serverless'],
    duration: '2023-2024',
    highlights: [
      'Built serverless backend',
      'Developed landing page',
      'Implemented authentication & payment'
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
    techStack: ['MERN Stack', 'GitHub Actions', 'EC2'],
    duration: '2023-2024',
    highlights: [
      'Full-stack payroll system',
      'CI/CD implementation',
      'Automated reporting system'
    ]
  },
  {
    id: 5,
    src: LogoRio,
    hoverSrc: BgRio,
    alt: 'Rio Board',
    width: 200,
    height: 80,
    mobileWidth: 109,
    mobileHeight: 34,
    gradientColor: 'rgba(25, 175, 167, 0), #19afa7',
    slug: 'rioBoard',
    techStack: ['Nest.js', 'PostgreSQL', 'Discord.js API'],
    duration: '2023-2024',
    highlights: [
      'Automated attendance tracking',
      'Integrated reporting features',
      'Efficient data management'
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
