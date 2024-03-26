// LanguageSwitcher.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import { saveLanguageToLocalStorage } from "../../i18n/i18n";

export const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    saveLanguageToLocalStorage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
    </div>
  );
};
