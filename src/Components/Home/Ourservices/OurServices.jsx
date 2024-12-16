import { useTranslation } from "react-i18next";
import ServicesCard from "./ServicesCard";
import {
  EcommerceDesign,
  MobileapplicationDesign,
  WebsiteDesign,
} from "../../../assets/images/servicesImages";

function OurServices() {
  const { t } = useTranslation();
  const services = t("services.sections", { returnObjects: true });
  console.log(services);

  return (
    <>
      <div className="bg-[#fff]">
        <section className=" parent-container py-10 px-4  ">
          <div className="text-center mb-8 pt-[20px]">
            <h2 className="font-changa text-[32px]   font-extrabold text-[#36768E]">
              {t("services.headTitle")}
            </h2>
            <p className="font-zain text-[25px]   font-normal text-[#848484]">
              {t("services.headSubTitle")}
            </p>
          </div>

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
