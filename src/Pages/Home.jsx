import { useTranslation } from "react-i18next";
import Hero from "../Components/Home/Hero/Hero";
import OurServices from "../Components/Home/Ourservices/OurServices";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import OurBusinessAndProject from "../Components/Home/OurBusinessAndProject/OurBusinessAndProject";
import OurInfo from "../Components/Home/OurInfo/OurInfo";
import ContactUs from "../Components/Home/ContactUs/ContactUs";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Hero />
      <OurServices />
      <WhyUs />
      <OurBusinessAndProject />
      <ContactUs />
      <OurInfo />
    </>
  );
}

export default Home;
