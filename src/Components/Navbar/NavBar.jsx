import { Link } from "react-router-dom";
import { navLinks } from "../../constants/data";

import { useState } from "react";
import { mainIcon, close, menu } from "../../assets/icons";
import { useTranslation } from "react-i18next";
import { styles } from "../../Styles/mixins";
import navStyle from "./Navbar.module.css";

function NavBar() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className="bg-transparent flex justify-between items-center py-3 relative z-[999]">
      <div className="flex items-center justify-center">
        <img
          src={mainIcon}
          alt="sphinxLogo"
          className="w-[80px] h-[40px] object-contain"
        />
      </div>

      <ul className="hidden md:flex justify-center items-center gap-5">
        {navLinks.map((link, index) => (
          <li
            key={`${link.id}-${index}`}
            className={`sm:text-[20px] lg:text-[24px] font-extrabold ${navStyle.links}`}>
            <Link
              to={`/${link.path}`}
              className={`font-zain ${styles.transitionAll} ${
                active === link.title
                  ? `text-[#00B7EA] sm:text-[22px] lg:text-[26px] font-[900]   ${navStyle.outlinedText}`
                  : "text-black"
              }`}
              onClick={() => {
                setActive(link.title);
              }}>
              {t(`navLinks.${link.title}`)}
            </Link>
          </li>
        ))}
      </ul>

      <div className=" flex justify-center items-center gap-3 ">
        <div className="langBtn">
          <button
            className={`${styles.btn_A} px-[14px] py-[1px]`}
            onClick={() =>
              i18n.language === "en"
                ? i18n.changeLanguage("ar")
                : i18n.changeLanguage("en")
            }>
            {i18n.language === "en" ? "En" : "Ar"}
          </button>
        </div>
        {/* Mobile Menu Button (for responsiveness) */}
        <div className="md:hidden flex   justify-end items-center duration-75 ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[16px] h-[16px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`duration-75 ${
              !toggle ? "hidden" : "flex"
            } p-6 bg-transparent absolute  top-[67px] m in-w-[140px] z-10 rounded-xl border border-[#6b63637f] ${
              i18n.language === "en" ? " right-[5px]" : " left-[5px]"
            }`}>
            <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={`${link.id}-${index}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  <Link
                    to={`/${link.path}`}
                    className={`${
                      navStyle.links
                    } font-zain transition-all duration-100  text-[22px]
                      ${styles.transitionAll}
                       ${
                         active === link.title
                           ? `text-[#00B7EA] text-[23px] font-[900]   ${navStyle.outlinedText}`
                           : "text-black"
                       }`}
                    onClick={() => {
                      setActive(link.title);
                    }}>
                    {t(`navLinks.${link.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
