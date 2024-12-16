import { useTranslation } from "react-i18next";
import {
  bigServicesCard,
  SmallServicesCard,
  EcommerceDesign,
  MobileapplicationDesign,
  WebsiteDesign,
} from "../../../assets/images/servicesImages";
import { styles } from "../../../Styles/mixins";
import { LeftArrow, RightArrow } from "../../../assets/icons";
import servStyle from "./OurServices.module.css";
function ServicesCard({
  sectionTitle,
  sectionDescription,
  sectionImage,
  cardStyle,
  cardId,
}) {
  const images = [
    { id: "0", src: EcommerceDesign },
    { id: "1", src: MobileapplicationDesign },
    { id: "2", src: WebsiteDesign },
  ];
  const { i18n } = useTranslation();
  return (
    <>
      {cardStyle === "E-commerce design" ? (
        <div className={`p-5`} style={{ direction: "ltr" }}>
          <div className="content w-[90%] m-auto sm:w-full">
            <h3
              className={`${styles.sectionHeadText} ${
                i18n.language === "ar" ? "text-end" : "text-start"
              }`}>
              {sectionTitle}
            </h3>
            <p
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className={`${styles.sectionSubText} 
               
              `}>
              {sectionDescription}
            </p>
          </div>
          <div className="relative w-[90%] m-auto sm:w-[100%]">
            <img
              src={SmallServicesCard}
              alt="SmallServicesCard"
              className="object-cover relative z-[9] overflow-hidden w-full "
              style={{
                transform: i18n.language === "ar" ? "scaleX(-1)" : "none",
              }}
            />
            <img
              src={images[cardId].src}
              alt={sectionTitle}
              className="absolute w-[92%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[8]"
            />
            <div
              className={`absolute 
                  top-[12px] md:top-[14px] lg:top-[16px]  
                h-[40px]  md:h-[42px] lg:h-[42px]  
                w-[40px] md:w-[42px] lg:w-[42px]
                   ${
                     i18n.language === "ar"
                       ? "left-[12px] md:left-[14px] lg:left-[16px] "
                       : "right-[14px] md:right-[14px]  lg:right-[16px]"
                   }
                  rounded-full flex items-center justify-center  cursor-pointer z-[999]  bg-[#002639]
                   ${servStyle.servicesArrow} 
                   
                   `}>
              <i
                className="fa-solid fa-arrow-up text-[#fff] text-[20px] "
                style={{
                  transform:
                    i18n.language === "ar" ? "rotate(-45deg)" : "rotate(45deg)",
                }}></i>
            </div>
          </div>
        </div>
      ) : cardStyle === "Mobile application programming" ? (
        <div className=" p-5">
          <div
            className={` relative w-[90%] sm:w-full m-auto  `}
            style={{ direction: "ltr" }}>
            <img
              src={bigServicesCard}
              alt="SmallServicesCard"
              className="absolute z-[999] top-0 bottom-0  w-[100%]  h-[100%]  "
              style={{
                transform: i18n.language === "ar" ? "scaleX(-1)" : "none",
              }}
            />
            <div className="image z-888 p-5 z-8 ">
              <div className="w-[100%] m-auto">
                <img
                  src={images[cardId].src}
                  alt={sectionTitle}
                  className=" w-[88%] h-[80%] bg-red-200 "
                  style={{
                    transform: i18n.language === "ar" ? "scaleX(-1)" : "none",
                  }}
                />
              </div>
              <div className=" mt-2 p-3">
                <h3
                  className={`${styles.sectionHeadText} ${
                    i18n.language === "ar" ? "text-end" : "text-start"
                  }   `}>
                  {sectionTitle}
                </h3>
                <p
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                  className={`${styles.sectionSubText} px-1 `}>
                  {sectionDescription}
                </p>
              </div>
            </div>

            <div
              className={`absolute 
                  top-[16px] md:top-[14px] lg:top-[16px]  
                h-[40px]  md:h-[42px] lg:h-[42px]  
                w-[40px] md:w-[42px] lg:w-[42px]
                   ${
                     i18n.language === "ar"
                       ? "left-[16px] md:left-[14px] lg:left-[16px] "
                       : "right-[16px] md:right-[14px]  lg:right-[16px]"
                   }
                  rounded-full flex items-center justify-center  cursor-pointer z-[999]  bg-[#002639]
                   ${servStyle.servicesArrow} 
                   
                   `}>
              <i
                className="fa-solid fa-arrow-up text-[#fff] text-[20px] "
                style={{
                  transform:
                    i18n.language === "ar" ? "rotate(-45deg)" : "rotate(45deg)",
                }}></i>
            </div>
          </div>
        </div>
      ) : cardStyle === "Website design" ? (
        <div className={`p-5`} style={{ direction: "ltr" }}>
          <div
            className="relative overflow-hidden m-auto
          w-[90%] sm:w-[100%]">
            <img
              src={SmallServicesCard}
              alt="SmallServicesCard"
              className="object-cover relative z-[9] overflow-hidden w-full "
              style={{
                transform: i18n.language === "ar" ? "scaleX(-1)" : "none",
              }}
            />
            <img
              src={images[cardId].src}
              alt={sectionTitle}
              className="absolute w-[83%] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[8]"
            />

            <div
              className={`absolute 
                  top-[12px] md:top-[14px] lg:top-[16px]  
                h-[40px]  md:h-[42px] lg:h-[42px]  
                w-[40px] md:w-[42px] lg:w-[42px]
                   ${
                     i18n.language === "ar"
                       ? "left-[12px] md:left-[14px] lg:left-[16px] "
                       : "right-[14px] md:right-[14px]  lg:right-[16px]"
                   }
                  rounded-full flex items-center justify-center  cursor-pointer z-[999]  bg-[#002639]
                   ${servStyle.servicesArrow} 
                   
                   `}>
              <i
                className="fa-solid fa-arrow-up text-[#fff] text-[20px] "
                style={{
                  transform:
                    i18n.language === "ar" ? "rotate(-45deg)" : "rotate(45deg)",
                }}></i>
            </div>
          </div>
          <div className="content w-[90%] m-auto sm:w-full">
            {/* Card Title */}
            <h3
              className={`${styles.sectionHeadText} ${
                i18n.language === "ar" ? "text-end" : "text-start"
              }`}>
              {sectionTitle}
            </h3>
            {/* Card Description */}
            <p
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className={`${styles.sectionSubText} `}>
              {sectionDescription}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ServicesCard;
