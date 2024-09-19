import { AboutMe } from "@/components/about/AboutMe";
import { HeroSection } from "@/components/home/HeroSection";
import Projects from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { Skills } from "@/components/skills/Skill";
import { Header } from "@/components/ui/Header";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
