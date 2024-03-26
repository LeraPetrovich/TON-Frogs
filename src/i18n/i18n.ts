// i18n/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { enTranslation } from "./locales/en";
import { ruTranslation } from "./locales/ru";

const LANGUAGE_KEY = "selectedLanguage";

const saveLanguageToLocalStorage = (lng: any) => {
  localStorage.setItem(LANGUAGE_KEY, lng);
};

const loadLanguageFromLocalStorage = () => {
  return localStorage.getItem(LANGUAGE_KEY) || "ru";
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    fallbackLng: "ru",
    supportedLngs: ["en", "ru"],
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    lng: loadLanguageFromLocalStorage(),
  });

export { i18n, saveLanguageToLocalStorage };
