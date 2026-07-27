import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AuthModal from "../components/AuthModal.jsx";
import WelcomeModal from "../components/WelcomeModal.jsx";
import ContactModal from "../components/ContactModal.jsx";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
      <WelcomeModal />
      <ContactModal />
    </>
  );
};
