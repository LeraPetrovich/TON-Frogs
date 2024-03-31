import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";
import { useTranslation } from "react-i18next";

export const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("description"));
    }
    document.title = t("page_title");
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return <AppRouter />;
};
