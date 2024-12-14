import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Arabic from "./constants/lang/Arabic.json";
import English from "./constants/lang/English.json";

const resources = {
  en: { translation: English },
  ar: { translation: Arabic },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
