import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";
import Backend from "i18next-http-backend";

export const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "Hindi" },
];

export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

export const TranslateFunction = (filename) => {
  const { t } = useTranslation(filename);
  return t;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: false,
    fallbackLng: "en",
    returnObjects: true,
    backend: {
      loadPath: "/local/{{lng}}/{{ns}}.json", //"http://localhost:3000/local/{{lng}}/{{ns}}.json"
    },
  });
