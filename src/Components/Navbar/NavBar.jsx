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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <div className="parent-container py-2">
      <nav className="bg-transparent flex justify-between items-center py-3 relative z-[999] ">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src={mainIcon}
            alt="sphinxLogo"
            className="w-[80px] h-[40px] object-contain"
          />
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-5  ">
          {navLinks.map((link, index) => (
            <li
              key={`${link.id}-${index}`}
              className={`text-[18px] sm:text-[20px] lg:text-[24px] font-bold transition-colors ${navStyle.links}  `}>
              <Link
                to={`/${link.path}`}
                className={`font-zain ${
                  styles.transitionAll
                } hover:text-[#00B7EA] 
                ${
                  active === link.title
                    ? `text-[#00B7EA] sm:text-[22px] lg:text-[28px] font-[900]   ${navStyle.outlinedText}`
                    : "text-black"
                } `}
                onClick={() => {
                  setActive(link.title);
                }}>
                {t(`navLinks.${link.title}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" flex justify-center items-center gap-4 ">
          <div className="langBtn">
            <button
              className={`${styles.btn_A} px-4 py-1 border rounded-md text-sm hover:bg-gray-100 hover:text-btnBg`}
              onClick={toggleLanguage}>
              {i18n.language === "en" ? "En" : "Ar"}
            </button>
          </div>

          {/* Mobile Menu Button  */}
          <div className="md:hidden flex   justify-end items-center duration-75 ">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[22px] h-[22px]  object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <div
                className={`absolute top-[65px] bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50 w-[200px] ${
                  i18n.language === "ar" ? "-left-[15px] " : " -right-[15px] "
                }`}>
                <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <li
                      className="transition-colors"
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
                        hover:text-[#00B7EA]
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
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
