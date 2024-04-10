import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import ruTranslation from "./locales/ru/translation.json";

const LANGUAGE_KEY = "selectedLanguage";

const saveLanguageToLocalStorage = (lng: any) => {
  localStorage.setItem(LANGUAGE_KEY, lng);
};

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  debug: false,
  fallbackLng: "ru",
});

export { i18n, saveLanguageToLocalStorage };
