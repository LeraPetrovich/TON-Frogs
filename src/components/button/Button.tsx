import React from "react";
import styles from "./button.module.scss";
import type { IButton } from "./types";

export const Button: React.FC<IButton> = ({
  text,
  icon,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className || ""}`}>
      {icon && <img src={icon} alt="icon_button" />}
      {text}
    </button>
  );
};
