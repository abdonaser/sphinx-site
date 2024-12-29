import { useTranslation } from "react-i18next";
import ourStyle from "./ContactUS.module.css";
function CustomeInput({ label, name, value, onChange, type }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      {type === "textarea" ? (
        <div className="relative w-full lg:py-0 rounded-[30px]    ">
          <label
            htmlFor={name}
            className={`
      text-[16px] text-[#000] font-[500] font-changa text-center
      absolute  transform -translate-y-1/2  ${
        i18n.language === "en" ? "left-[25px]" : "right-[25px]"
      }
      bg-white px-[8px]
    `}>
            {label} <span className="text-red-600">*</span>
          </label>
          <textarea
            name={name}
            id={name}
            value={value}
            rows="3"
            className={`
      w-full rounded-[30px] p-[15px] border border-[#AAE2F9]
      text-${i18n.language === "en" ? "left" : "right"}
      focus:outline-none focus:border-teal-700 hover:border-teal-500
    `}
            dir={i18n.language === "en" ? "ltr" : "rtl"}
            onChange={onChange}
          />
        </div>
      ) : (
        <div className="relative w-full lg:py-0 rounded-[30px]     ">
          <label
            htmlFor={name}
            className={`
                        text-[16px] text-[#000] font-[500] font-changa text-center
                        absolute -top-[28%] 
                        ${
                          i18n.language === "en"
                            ? "left-[25px]"
                            : "right-[25px]"
                        }
                        bg-white px-[8px]
                                `}>
            {/* {i18n.language === "en" ? "Name " : "الاسم "} */}
            {label} <span className="text-red-600  ">*</span>
          </label>

          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`
      w-full rounded-[30px] p-[10px] border border-[#AAE2F9]
      text-${i18n.language === "en" ? "left" : "right"}
      focus:outline-none focus:border-teal-700 hover:border-teal-500
    `}
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          />
        </div>
      )}
    </>
  );
}
export default CustomeInput;
