import React from "react";
import styles from "./title.module.scss";
import type { ITitle } from "./types";

export const Title: React.FC<ITitle> = ({ text, className }) => {
  return <h1 className={`${styles.title} ${className || ""}`}>{text}</h1>;
};
