import React from "react";
import styles from "./grayBlock.styles.module.scss";

interface GrayBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const GrayBlock: React.FC<GrayBlockProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.grayBlock} ${className || ""}`}>{children}</div>
  );
};
