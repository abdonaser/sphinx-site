import { useTranslation } from "react-i18next";

function ContactInfo({ imageSrc, imageWidth = 50, title, details }) {
  const { i18n } = useTranslation();

  // Define a map for dynamic width classes
  const widthMap = {
    "PHONE NUMBER": "w-[65px] md:w-[75px]",
    location: "w-[120px] md:w-[165px]",
    "E-MAIL": "w-[120px] md:w-[165px]",
  };

  return (
    <div
      className=" 
     flex flex-col justify-center items-center
     w-[45%] md:w-1/3 lg:w-full
     ">
      {/* Image Container */}
      <div className={`${widthMap[title] || `w-[${imageWidth}px]`} my-2`}>
        <img
          src={imageSrc}
          className="w-full"
          alt={`Icon representing ${title}`}
        />
      </div>

      {/* Title Section */}
      <div
        className="bg-btnBg 
      flex justify-center items-center w-[100%] pt-[2px] my-1">
        <p className="    text-white text-[14px] text-center font-zain uppercase">
          {title}
        </p>
      </div>

      {/* Details Section */}
      <p
        className={`font-zain text-[15px] lg:text-[17px] font-bold ${
          i18n.language === "en" ? "text-left" : "text-right"
        }`}>
        {details}
      </p>
    </div>
  );
}

export default ContactInfo;
