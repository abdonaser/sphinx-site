import { useTranslation } from "react-i18next";
import HeaderSection from "../../Public/HeaderSection";
import { useState } from "react";
import ourStyle from "./OurBusinessAndProject.module.css";
import SectionWrapper from "../../../hoc/SectionWrapper";
import { allprojects } from "../../../constants/data";
import ProjectCard from "./ProjectCard";
import ProjectCardBG from "./ProjectCardBG";

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
                    text-[17px] xs:text-[20px]  sm:text-[23px] md:text-[24px] lg:text-[25px] 
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
                      absolute z-[99] -bottom-[39px] left-1/2 transform -translate-x-1/2 translate-y-[10px] 
                      w-[40%] sm:w-[45%] md:w-[70%] lg:md:w-[72%] 
                       h-[15px] md:h-[25px]
                         
                        rounded-t-[16px]  ">
                        <div
                          className={`${ourStyle.pointer} relative h-full w-[100%] m-auto rounded-t-[7px] sm:rounded-t-[10px] md:rounded-t-[13px] lg:rounded-t-[14px]  z-[9999] bg-white  border-t border-l border-r border-[#3EC9FF]  `}>
                          {/*
                            <img
                              src={pointerImg}
                              className="absolute inset-0 -top-[10px] h-full w-full z-[999] "
                              alt={cat.title}
                            /> 
                          */}
                          {/* <div className={`${ourStyle.pointerChild} border border-black`}>
                            
                          </div> */}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="projects relative  bg-white w-full  border border-[#3EC9FF] drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-[20px] mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {allprojects.map((project, index) =>
                index === 1 ? (
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                ) : (
                  <ProjectCardBG
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionWrapper(OurBusinessAndProject, "projects");
