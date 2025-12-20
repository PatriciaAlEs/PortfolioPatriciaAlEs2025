import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AuthModal from "../components/AuthModal.jsx";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
    </>
  );
};
