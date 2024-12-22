import { useTranslation } from "react-i18next";
import { styles } from "../../../Styles/mixins";
import WyUsSection from "./wyUsSection";
import WaveBackground from "../../Public/WaveBackground";
import HeaderSection from "../../Public/HeaderSection";
import SectionWrapper from "../../../hoc/SectionWrapper";

function WhyUs() {
  const { t } = useTranslation();
  const wyUsSections = t("wyUs.sections", { returnObjects: true });
  return (
    <>
      <div className="relative ">
        {/* SVG Background */}
        <div className="  ">
          <WaveBackground
            style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          />
        </div>
        <section className=" parent-container pt-[60px] flex flex-col justify-center items-start">
          <HeaderSection
            headTitle={t("wyUs.headTitle")}
            SubText={t("wyUs.headSubTitle")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 my-5 mx-auto">
            {wyUsSections.map((section, index) => (
              <WyUsSection key={index} section={section} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionWrapper(WhyUs, "whyUs");
