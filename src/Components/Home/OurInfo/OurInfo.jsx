import { useTranslation } from "react-i18next";
import { MainLogo } from "../../../assets/images/OurInfo"; // Ensure the image import is correct

function OurInfo() {
  const svgString = `<svg width="1440" height="484" viewBox="0 0 1440 484" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_1551)">
      <path d="M98.7177 133.872L124.187 145.865C154.874 160.316 191.498 151.819 212.733 125.37C239.489 92.0432 289.014 88.5304 320.143 117.813C341.268 137.685 372.125 143.23 398.846 131.957L453.208 109.023C485.894 95.2337 522.864 95.7838 555.125 110.539L573.644 119.01C599.029 130.621 628.448 129.325 652.714 115.527C680.326 99.8263 714.305 100.448 741.324 117.149L742.635 117.96C774.312 137.539 814.803 135.45 844.296 112.715L851 107.547C893.087 76.616 947.9 68.9051 996.887 87.024L1016.19 94.1636C1063.52 111.668 1115.81 110 1161.92 89.5132L1203.41 71.0822C1238.78 55.3686 1279.6 57.9611 1312.7 78.0229L1349.47 100.311C1360.42 106.947 1373.96 107.653 1385.54 102.19C1410.86 90.2457 1440 108.718 1440 136.714V483.5H17.7446C7.94452 483.5 0 475.555 0 465.755V196.5C0 145.749 52.8029 112.25 98.7177 133.872Z" fill="white"/>
      <path d="M847.948 103.587L847.993 103.552L848.039 103.518C891.48 71.5915 948.058 63.6324 998.621 82.3345L1017.92 89.4741C1064.03 106.527 1114.97 104.901 1159.89 84.9438L1201.38 66.5129C1238.24 50.1347 1280.79 52.8368 1315.29 73.747L1352.06 96.0349C1361.57 101.802 1373.35 102.415 1383.41 97.6684C1412.05 84.159 1445 105.051 1445 136.714V483.5V488.5H1440H17.7446C5.18309 488.5 -5 478.317 -5 465.755V196.5C-5 142.083 51.6168 106.165 100.848 129.348L126.317 141.342C154.91 154.806 189.043 146.89 208.834 122.239C237.411 86.6444 290.311 82.8862 323.569 114.171C343.253 132.687 372.004 137.854 396.903 127.35L451.265 104.416C485.241 90.0825 523.671 90.6544 557.205 105.992L575.724 114.463C599.648 125.405 627.373 124.184 650.242 111.18C679.443 94.5761 715.379 95.234 743.953 112.896L745.264 113.707C775.17 132.192 813.399 130.219 841.244 108.755L847.948 103.587Z" stroke="white" stroke-width="10"/>
    </g>
    <defs>
      <filter id="filter0_d_1_1551" x="-40" y="0.898438" width="1520" height="502.602" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-20"/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.462745 0 0 0 0 0.556863 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1551"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1551" result="shape"/>
      </filter>
    </defs>
  </svg>`;
  const encodedSvg = `data:image/svg+xml;base64,${btoa(svgString)}`;

  const { t, i18n } = useTranslation();
  const mostLinks = t("ourInfo.links.links", { returnObjects: true });
  const contacts = t("ourInfo.contact.contacts", { returnObjects: true });

  return (
    <div
      className="ourInfo content-end w-full  min-h-[480px] relative p-0 pb-5 "
      style={{
        backgroundImage: `url(${encodedSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}>
      <div className="  content-end mb-5  ">
        <div className="parent-container flex flex-wrap sm:flex-nowrap flex-row justify-between items-start gap-5  ">
          {/* Main Info Section */}
          <div className="mainInfo w-[100%] sm:w-[30%] flex flex-col items-start ">
            <div className="logo mb-4">
              <img src={MainLogo} alt="Logo" className="w-[35%] sm:w-[55%]" />
            </div>
            <h3
              className={`text-[12px] sm:text-[16px] md:text-[20px] font-bold font-zain text-black
                ${i18n.language === "ar" ? "text-right" : "text-left "}
                  `}
              dir={i18n.language === "ar" ? "rtl" : "ltr"}>
              {t("ourInfo.mainText")}
            </h3>
          </div>

          {/* Most Important Links Section */}
          <div className="impLinks w-[100%] sm:w-[30%]  md:pl-16">
            <h2 className="text-[16px] sm:text-[20px]  font-extrabold font-changa  text-secondary mb-4 ">
              {t("ourInfo.links.title")}
            </h2>
            <ul className="list-inside p-0 list-disc flex flex-wrap flex-row justify-between items-baseline sm:flex-col sm:items-start sm:justify-start md:pl-5">
              {mostLinks.map((link, index) => (
                <li
                  key={index}
                  className="  hover:text-blue-600 cursor-pointer text-black font-medium font-changa text-[9px] sm:text-[16px]
                   w-[30%] sm:w-full md:w-[80%]">
                  {link.Text}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="contactInfo w-full sm:w-1/3 md:pl-16">
            <h2 className="text-[16px] sm:text-[20px] font-extrabold font-changa  text-secondary mb-4">
              {t("ourInfo.contact.title")}
            </h2>
            <ul className="flex flex-wrap flex-row justify-between items-center sm:flex-col sm:items-start gap-2 sm:justify-start ">
              {contacts.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center text-black font-medium font-changa text-[9px] sm:text-[16px] ">
                  <i className={`fas ${contact.icon} mr-2 text-black `}></i>
                  <span className="ml-0">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurInfo;
