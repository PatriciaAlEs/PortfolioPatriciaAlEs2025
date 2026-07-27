import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AuthModal from "../components/AuthModal.jsx";
import WelcomeModal from "../components/WelcomeModal.jsx";
import ContactModal from "../components/ContactModal.jsx";
import MotionController from "../components/MotionController.jsx";
import LibraryIntro from "../components/LibraryIntro.jsx";
import ReadEasterEgg from "../components/ReadEasterEgg.jsx";

export const Layout = () => {
  return (
    <>
      <LibraryIntro />
      <Navbar />
      <MotionController />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
      <WelcomeModal />
      <ContactModal />
      <ReadEasterEgg />
    </>
  );
};
