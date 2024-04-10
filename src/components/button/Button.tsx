import React from "react";
import styles from "./button.module.scss";
import type { IButton } from "./types";
import { useTranslation } from "react-i18next";

export const Button: React.FC<IButton> = ({
  text,
  iconRight,
  onClick,
  className,
  iconLeft,
  message,
}) => {
  const { t } = useTranslation();
  return (
    <button onClick={onClick} className={`${styles.button} ${className || ""}`}>
      {iconRight && <img src={iconRight} alt="icon_button" />}
      {text}
      {iconLeft && <img src={iconLeft} alt="icon_button" />}
      {message && <span className={styles.message}>{t("soon")}</span>}
    </button>
  );
};
