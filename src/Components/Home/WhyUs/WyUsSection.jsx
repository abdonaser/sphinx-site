import {
  ideaSolutions,
  lessCost,
  lessTime,
  PrivacyAndSecurity,
  SoftwareExperts,
  technicalSupport,
} from "../../../assets/images/whyUS";

function WyUsSection({ section }) {
  const icons = [
    {
      id: "Ideas & solutions",
      src: ideaSolutions,
    },
    {
      id: "less Cost",
      src: lessCost,
    },
    {
      id: "less time",
      src: lessTime,
    },
    {
      id: "Privacy and Security",
      src: PrivacyAndSecurity,
    },
    {
      id: "Software experts",
      src: SoftwareExperts,
    },
    {
      id: "technical support",
      src: technicalSupport,
    },
  ];
  const sectionIcon = icons.find((icon) => icon.id == section.id);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="relative w-[85%] mx-auto bg-[#fff] rounded-[50px] text-center py-5 px-4 border drop-shadow-2xl">
          {/* Title */}
          <h2 className="font-zain font-bold text-[30px] py-2 px-2">
            {section.title}
          </h2>

          {/* Description */}
          <p className="font-zain text-[20px] font-light">
            {section.descripiton}
          </p>

          {/* Icon */}
          <img
            src={sectionIcon.src}
            alt=""
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55px] h-[55px]"
          />
        </div>
      </div>
    </>
  );
}

export default WyUsSection;
