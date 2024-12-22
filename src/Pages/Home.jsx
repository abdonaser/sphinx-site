import Hero from "../Components/Home/Hero/Hero";
import OurServices from "../Components/Home/Ourservices/OurServices";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import OurBusinessAndProject from "../Components/Home/OurBusinessAndProject/OurBusinessAndProject";
import OurInfo from "../Components/Home/OurInfo/OurInfo";
import ContactUs from "../Components/Home/ContactUs/ContactUs";
function Home() {
  return (
    <div className="relative">
      <Hero />
      <OurServices />
      <WhyUs />
      <OurBusinessAndProject />
      <ContactUs />
      <OurInfo />
    </div>
  );
}

export default Home;
