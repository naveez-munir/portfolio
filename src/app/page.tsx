import { AboutMe } from "@/components/about/AboutMe";
import ContactMe from "@/components/contact/ContactMe";
import { ContactForm } from "@/components/ContactInfo";
import { HeroSection } from "@/components/home/HeroSection";
import Projects from "@/components/projects/Projects";
import { ResumeSection } from "@/components/ResumeSection";
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
      <ResumeSection />
      <Skills />
      <ContactForm />
      <Projects />
      {/* <ContactMe /> */}
    </>
  );
};

export default Home;
