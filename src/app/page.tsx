import { AboutMe } from "@/components/about/AboutMe";
import ContactMe from "@/components/contact/ContactMe";
import { ContactForm } from "@/components/contact/ContactInfo";
import { HeroSection } from "@/components/home/HeroSection";
import Projects from "@/components/projects/ProjectSection";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { Services } from "@/components/services/Services";
import { Skills } from "@/components/skills/Skill";
import { Footer } from "@/components/ui/Footer";
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
      <Footer />
      {/* <ContactMe /> */}
    </>
  );
};

export default Home;
