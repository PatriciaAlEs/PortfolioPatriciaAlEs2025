import Hero from "../components/Hero.jsx";
import Experience from "../components/Experience.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import MoreAboutMe from "../components/MoreAboutMe.jsx";
import CapabilitiesSection from "../components/CapabilitiesSection.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import AboutMe from "../components/AboutMe.jsx";

export const Home = () => (
  <>
    <Hero />
    <ProjectsSection />
    <CapabilitiesSection />
    <Experience />
    <WorkProcess />
    <AboutMe />
    <MoreAboutMe />
  </>
);
