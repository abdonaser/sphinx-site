import { useTranslation } from "react-i18next";
import {
  SSWORD,
  youngHandsomeLeft,
  youngHandsomeright,
} from "../../../assets/images";
import heroStyle from "./Hero.module.css";
import { styles } from "../../../Styles/mixins";
import { whiteWave } from "../../../assets/Svgs";

function Hero() {
  const { t, i18n } = useTranslation();
  // i18n.changeLanguage("en")
  return (
    <>
      <div className=" h-screen flex justify-center md:justify-between items-start py-10 ">
        <div className="leftSIde  w-[62%] ">
          <h3 className={`${styles.heroHeadText}`}>{t("hero.text")}</h3>
          <div>
            <img src={SSWORD} alt="SSWORD" />
          </div>
        </div>
        <div
          className={`absolute hidden md:block ${
            i18n.language === "en" ? "right-0" : "left-0"
          }     
        md:w-[40%] md:bottom-0 md:top-[95px]      
        lg:w-[45%] lg:bottom-0 lg:top-0  `}>
          <img
            src={
              i18n.language === "en" ? youngHandsomeright : youngHandsomeLeft
            }
            alt="youngHandsome"
            className="w-full  "
          />
        </div>
        {/* White Wave SVG */}
        <div className={`absolute bottom-0 right-0 left-0 z-50 w-full `}>
          <img
            src={whiteWave}
            alt="White Wave"
            className={`w-full ${heroStyle.svgStyle}  `}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
