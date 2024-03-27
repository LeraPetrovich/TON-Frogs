import React from "react";
import styles from "./whiteBlock.styles.module.scss";
import type { IWhiteBlock } from "./types";

export const WhiteBlock: React.FC<IWhiteBlock> = ({ img, text }) => {
  return (
    <div className={styles.tags_item}>
      <div className={styles.tags_item_white}>
        <img src={img} alt="item" />
      </div>
      <span className="medium_text">{text}</span>
    </div>
  );
};
