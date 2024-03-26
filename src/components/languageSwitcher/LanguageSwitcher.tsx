import React from "react";
import { useTranslation } from "react-i18next";
import { saveLanguageToLocalStorage } from "../../i18n";
import styles from "./languageSwitcher.styles.module.scss";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    saveLanguageToLocalStorage(lng);
  };

  return (
    <div className={`${styles.switcher_box} ${className || ""}`}>
      <button
        className={`${styles.button_lang} ${
          i18n.language === "ru" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
      <span>|</span>
      <button
        className={`${styles.button_lang} ${
          i18n.language === "en" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};
