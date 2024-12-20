import { useTranslation } from "react-i18next";
import { pointerImg } from "../../../assets/images/OurProjects";
import HeaderSection from "../../Public/HeaderSection";
import { useState } from "react";
import { div } from "motion/react-client";
import ourStyle from "./OurBusinessAndProject.module.css";

function OurBusinessAndProject() {
  const [active, setActive] = useState("All our projects");
  const { t } = useTranslation();
  const projectCategories = t("OurProject.projectCategories", {
    returnObjects: true,
  });
  return (
    <>
      <div className="relative ">
        <section className=" parent-container pt-[60px] flex flex-col justify-center items-start">
          <HeaderSection
            headTitle={t("OurProject.headTitle")}
            SubText={t("OurProject.headSubTitle")}
          />

          <div className="w-full mb-10 ">
            <div className="projectCategories ">
              <ul className=" flex justify-center items-center gap-2 sm:gap-5 md:gap-8 bg-teal-2 text-black   text-center">
                {projectCategories.map((cat, index) => (
                  <li
                    key={` ${index}`}
                    className={`relative font-changa 
                    text-[15px]  sm:text-[20px] md:text-[22px] lg:text-[27px] 
                    font-[800]   text-center mx-auto`}>
                    <a
                      className={`font-zain hover:text-white cursor-pointer anchorhover
                ${
                  active === cat.title
                    ? `text-white ${ourStyle.outlinedTextSection}`
                    : ""
                } `}
                      onClick={() => {
                        setActive(cat.title);
                      }}>
                      {t(`${cat.title}`)}
                    </a>
                    {active === cat.title && (
                      <div
                        className="
                      absolute z-[99] -bottom-[42px] left-1/2 transform -translate-x-1/2 translate-y-[10px] 
                      w-[30%] sm:w-[35%] md:w-[60%] lg:md:w-[60%] 
                       h-[20px] md:h-[30px]
                         
                        rounded-t-[16px]  ">
                        <div
                          className={`${ourStyle.pointer} relative h-full w-[100%] m-auto   z-[9999] bg-white rounded-t-[15px] border-t border-[#3EC9FF]  `}>
                          {/*
                            <img
                              src={pointerImg}
                              className="absolute inset-0 -top-[10px] h-full w-full z-[999] "
                              alt={cat.title}
                            /> 
                          */}
                          <div className={`${ourStyle.pointerChild}`}> </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="projects relative  bg-white w-full h-[500px] border border-[#3EC9FF] drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-[20px] mt-10"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurBusinessAndProject;
