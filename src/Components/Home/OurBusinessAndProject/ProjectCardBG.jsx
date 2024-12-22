import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

import { Tilt } from "react-tilt";
import { github } from "../../../assets/images/OurProjects";
import { useTranslation } from "react-i18next";
import { bigServicesCard } from "../../../assets/images/servicesImages";
import { styles } from "../../../Styles/mixins";

function ProjectCardBG({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) {
  const { t, i18n } = useTranslation();
  return (
    // <motion.div
    //   variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    //   className=" m-auto">
    //   <Tilt
    //     options={{
    //       max: 45,
    //       scale: 1,
    //       speed: 450,
    //     }}
    //     className="bg-[#002639] p-5 rounded-2xl   ">
    //     <div className="relative w-full h-[230px]">
    //       <img
    //         src={image}
    //         alt={`project-${name}`}
    //         className="w-full h-full object-cover rounded-2xl"
    //       />

    //       <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
    //         <div
    //           onClick={() => window.open(source_code_link, "_blank")}
    //           className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
    //           <img
    //             src={github}
    //             alt="source code"
    //             className="w-1/2 h-1/2 object-contain"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-5">
    //       <h3 className="text-white font-bold text-[24px]">{name}</h3>
    //       <p className="mt-2 text-secondary text-[14px]">{description}</p>
    //     </div>
    //     <div className="mt-4 flex flex-wrap gap-2">
    //       {tags.map((tag) => (
    //         <p
    //           key={`${name}-${tag.name}`}
    //           className={`text-[14px] ${tag.color}`}>
    //           #{tag.name}
    //         </p>
    //       ))}
    //     </div>
    //   </Tilt>
    // </motion.div>

    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <div
          className={` relative  w-full h-full    p-4 `}
          style={{ direction: "ltr" }}>
          <img
            src={bigServicesCard}
            alt="SmallServicesCard"
            className="absolute z-[999] inset-0 w-[100%]  h-[100%]  "
            style={{
              transform: i18n.language === "ar" ? "scaleX(-1)" : "none",
            }}
          />
          <div className="image z-888 p-5 z-8 ">
            <div className="w-[100%] m-auto  mt-[75px] border-2 border-[#cfc6c6] rounded-3xl overflow-hidden">
              <img
                src={image}
                alt={`project-${name}`}
                className=" w-[100%]"
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
                {name}
              </h3>
              <p
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                className={`${styles.sectionSubText} px-1 `}>
                {description}
              </p>
            </div>
          </div>

          {/* <div
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
        </div> */}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCardBG;
