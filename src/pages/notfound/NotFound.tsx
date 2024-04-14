import React from "react";
import styles from "./notFound.module.scss";
import { Title } from "../../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.not_found_block}>
      <Title className={styles.title} text={"404"} />
      <span className="medium_text">{t("404-message")}</span>
      <Link className={styles.link} to={"/"}>
        {t("404-link")}
      </Link>
    </div>
  );
};
