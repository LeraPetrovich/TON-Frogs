import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const LANGUAGE_KEY = "selectedLanguage";

const saveLanguageToLocalStorage = (lng: any) => {
  localStorage.setItem(LANGUAGE_KEY, lng);
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: false,
  fallbackLng: "ru",
});

export { i18n, saveLanguageToLocalStorage };
