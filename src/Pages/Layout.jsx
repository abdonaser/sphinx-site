import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Layout() {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
        <NavBar />
        <Outlet />
      </div>

      {scrolled && (
        <div
          className={`fixed bottom-5 right-5 
            w-[20px] h-[45px] 
            md:w-[30px] md:h-[55px] 
            border-4 border-[#36768E] flex justify-center px-2 rounded-3xl overflow-hidden cursor-pointer z-[99] 
      transition-all duration-300 ${
        scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <motion.i
            animate={{
              y: [7, 27, 7],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="fa-solid fa-hand-pointer text-btnBg "
            style={{ fontSize: "16px" }}
          />
        </div>
      )}
    </>
  );
}

export default Layout;
