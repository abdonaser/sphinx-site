import { useTranslation } from "react-i18next";
import { pointerImg } from "../../../assets/images/OurProjects";
import HeaderSection from "../../Public/HeaderSection";
import { useState } from "react";
import { div } from "motion/react-client";

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
              <ul className=" flex justify-center items-center gap-8 bg-teal-2 text-black  ">
                {projectCategories.map((cat, index) => (
                  <li
                    key={` ${index}`}
                    className={`relative font-changa text-[20px]  md:text-[25px] lg:text-[30px] font-[800]  `}>
                    <a
                      className={`font-zain hover:text-white cursor-pointer anchorhover
                ${active === cat.title ? `text-white outlinedText` : ""} `}
                      onClick={() => {
                        setActive(cat.title);
                      }}>
                      {t(`${cat.title}`)}
                    </a>
                    {active === cat.title && (
                      <div className="absolute z-[999] -bottom-[72px] left-1/2 transform -translate-x-1/2 translate-y-[10px] w-[100%] h-[60px] overflow-hidden rounded-full">
                        <div className="relative h-full w-[70%] m-auto rounded-full z-[999] ">
                          <img
                            src={pointerImg}
                            className="absolute inset-0 -top-[10px] h-full w-full z-[999] "
                            alt={cat.title}
                          />
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="projects bg-white w-full h-[500px] border border-[#3EC9FF] drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-[20px] mt-10"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurBusinessAndProject;
