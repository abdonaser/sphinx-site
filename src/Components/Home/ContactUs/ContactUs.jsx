import { useTranslation } from "react-i18next";
import HeaderSection from "../../Public/HeaderSection";
import {
  arabicPerson,
  Email,
  englishPerson,
  Location,
  Phone,
} from "../../../assets/images/contactUS";
import { useState } from "react";
import FormInput from "./FormInput";
import ContactInfo from "./ContactInfo";
import ourStyle from "./ContactUS.module.css";
import SectionWrapper from "../../../hoc/SectionWrapper";
function ContactUs() {
  const { t, i18n } = useTranslation();

  const contactForm = t("ContactUs.Form", {
    returnObjects: true,
  });

  //  ${i18n.language === "en" ? "right-0" : "left-0"}

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };
  return (
    <>
      <div className=" pt-[60px] flex flex-col justify-center items-start">
        <HeaderSection
          headTitle={t("ContactUs.headTitle")}
          SubText={t("ContactUs.headSubTitle")}
        />

        <div className=" relative bg-white w-full py-7 mt-5  ">
          <div
            className=" parent-container
              flex  flex-col-reverse lg:flex-row
              justify-end 
              gap-[20px]
          ">
            <div className="imageSection  hidden  lg:block   ">
              <img
                src={i18n.language === "en" ? englishPerson : arabicPerson}
                alt="imageSection"
                className={`absolute bottom-0  md:w-[18%] lg:w-[26%] ${
                  i18n.language === "en" ? "left-[10%]" : "right-[10%]"
                }   `}
              />
            </div>

            <div
              className="  
            formSection    
            md:w-[100%] lg:w-[60%]
            py-5 
            ">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {contactForm.map((input, index) => (
                  <div
                    key={index}
                    className={`
                      ${ourStyle.dynamicMargin}
                    md:w-[70%]
                    lg:w-[65%]
                   lg:mt-5
                  ml-[${index}px]
                
                  `}
                    style={{
                      [i18n.language === "en"
                        ? "marginLeft"
                        : "marginRight"]: `${50 * index}px`,
                    }}>
                    <FormInput
                      label={input.inputName}
                      name={input.id}
                      value={formData[input.id]}
                      onChange={handleChange}
                      required
                      language={i18n.language}
                      marginSpace={35 * index}
                      index={index}
                    />
                  </div>
                ))}
                <div className="w-full flex justify-center items-center">
                  <button
                    className="
                  w-[25%] mx-auto py-3 bg-btnBg 
                hover:bg-blue-700 hover:shadow-lg
                 text-white font-medium font-changa  
                 shadow-md text[20px]
                 rounded-full transition-all 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    SEND
                  </button>
                </div>
              </form>
            </div>

            <div
              className=" 
            flex flex-row lg:flex-col flex-wrap md:flex-nowrap
            justify-center md:justify-between lg:justify-center
             items-baseline lg:items-center 
            gap-[5px] md:gap-[15px]   
            mb-10 md:mb-auto   ">
              {/* PHONE NUMBER */}
              <ContactInfo
                imageSrc={Phone}
                title={"PHONE NUMBER"}
                details={"01114189522"}
              />

              {/* LOCATION */}
              <ContactInfo
                imageSrc={Location}
                title={"location"}
                details={"10 st Nasr Ciyt Cairo"}
              />

              {/* Email */}
              <ContactInfo
                imageSrc={Email}
                title={"E-MAIL"}
                details={"SS@Gmail.com"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(ContactUs, "contactUS");
