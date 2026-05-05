import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ThemeController from './ThemeController';

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(path);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Nav />

      <div id="home" className="scroll-mt-24"><Home /></div>
      <div id="about" className="scroll-mt-24"><About /></div>
      <div id="menu" className="scroll-mt-24"><Menu /></div>
      <div id="contact" className="scroll-mt-24"><Contact /></div>

      <Footer />
      <ThemeController></ThemeController>
    </>
  );
};

export default Layout;