import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./locales/en/translation.json";
import common_jp from "./locales/jp/translation.json";

const resources = {
  en: {
    translation: common_en,
  },
  jp: {
    translation: common_jp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
