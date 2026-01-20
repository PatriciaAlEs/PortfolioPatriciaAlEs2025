import Hero from "../components/Hero.jsx";
import ContentsStrip from "../components/ContentsStrip.jsx";
import Experience from "../components/Experience.jsx";
import TechGrid from "../components/TechGrid.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import MoreAboutMe from "../components/MoreAboutMe.jsx";

export const Home = () => (
  <>
    <Hero />
    <ContentsStrip />
    <MoreAboutMe />
    <Experience />
    <ProjectsSection />
    <TechGrid />
  </>
);
