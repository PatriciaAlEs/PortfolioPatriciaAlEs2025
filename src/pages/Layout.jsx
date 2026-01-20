import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AuthModal from "../components/AuthModal.jsx";
import WelcomeModal from "../components/WelcomeModal.jsx";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
      <WelcomeModal />
    </>
  );
};
