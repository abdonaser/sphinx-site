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
      <div className="relative ">
        <div className="parent-container   p-2 ">
          <div className=" h-screen flex justify-start md:justify-between items-center z-[999]">
            <div className="leftSIde md:w-[58%] md:py-10">
              <h3 className={`${styles.heroHeadText} mb-4   `}>
                {t("hero.text")}
              </h3>
              <div>
                <img src={SSWORD} alt="SSWORD" />
              </div>
            </div>
            <div
              className={`  
              w-[42%] hidden md:flex items-center  h-full 
              ${i18n.language === "en" ? "right-0" : "left-0"}     
            `}>
              <img
                src={
                  i18n.language === "en"
                    ? youngHandsomeright
                    : youngHandsomeLeft
                }
                alt="youngHandsome"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* SVG Background */}
        <svg
          className={`absolute bottom-0 left-0 w-full z-0   ${heroStyle.svgStyle}`}
          id="visual"
          viewBox="0 0 900 200" // Adjust height as needed
          xmlns="http://www.w3.org/2000/svg"
          version="1.1">
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="-5"
                stdDeviation="10"
                floodColor="#D2D2D2"
              />
            </filter>
          </defs>
          <path
            d="M0 150L10 145C20 140 40 130 60 125C80 120 100 120 120 125C140 130 160 140 180 145C200 150 220 155 240 150C260 145 280 130 300 125C320 120 340 125 360 135C380 145 400 160 420 165C440 170 460 165 480 170C500 175 520 190 540 185C560 180 580 160 600 160C620 160 640 180 660 175C680 170 700 145 720 140C740 135 760 145 780 150C800 155 820 160 840 160C860 160 880 155 890 152.5L900 150V200H890C880 200 860 200 840 200C820 200 800 200 780 200C760 200 740 200 720 200C700 200 680 200 660 200C640 200 620 200 600 200C580 200 560 200 540 200C520 200 500 200 480 200C460 200 440 200 420 200C400 200 380 200 360 200C340 200 320 200 300 200C280 200 260 200 240 200C220 200 200 200 180 200C160 200 140 200 120 200C100 200 80 200 60 200C40 200 20 200 10 200H0Z"
            fill="#f5f5f5" // Updated fill for better blending
            filter="url(#shadow)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
    </>
  );
}

export default Hero;
