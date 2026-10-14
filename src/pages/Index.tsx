import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Home */}
        <HeroSection />
        {/* 2. About Me */}
        <AboutSection />
        {/* 3. Projects */}
        <ProjectsSection />
        {/* 4. Skills */}
        <SkillsSection />
        {/* 5. Experience & Education */}
        <ExperienceSection />
        <EducationSection />
        {/* 6. Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
