import { useTranslation } from "react-i18next";
import ServicesCard from "./ServicesCard";
import {
  EcommerceDesign,
  MobileapplicationDesign,
  WebsiteDesign,
} from "../../../assets/images/servicesImages";
import { styles } from "../../../Styles/mixins";
import HeaderSection from "../../Public/HeaderSection";

function OurServices() {
  const { t } = useTranslation();
  const services = t("services.sections", { returnObjects: true });

  return (
    <>
      <div className="bg-[#fff]">
        <section className=" parent-container py-10 px-4  ">
          <HeaderSection
            headTitle={t("services.headTitle")}
            SubText={t("services.headSubTitle")}
          />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-5"
            style={{ direction: "ltr" }}>
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                cardId={index}
                sectionTitle={service.sectionTitle}
                sectionDescription={service.sectionDescription}
                cardStyle={service.id}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default OurServices;
