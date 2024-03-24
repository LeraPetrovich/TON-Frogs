import React from "react";
import styles from "./bridge.styles.module.scss";
import { useTranslation } from "react-i18next";

import { Title, GrayBlock, Button } from "../../components";
import rarible from "../../assets/icons/raribleIcon.svg";
import openSea from "../../assets/icons/OpenSeaIcon.svg";

const linksIcons = [
  {
    icon: rarible,
    text: "Rarible",
  },
  {
    icon: openSea,
    text: "OpenSea",
  },
];

export const Bridge: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.bridgeBox}>
      <Title text={t("bridge")} />
      <span className="medium_text">{t("bridgeText")}</span>
      <div className={styles.buttons_box}>
        <GrayBlock className={styles.grayBlock}>
          <div className={styles.block_tag}>+ reveal</div>
          <span>{t("revealFrogsText")}</span>
        </GrayBlock>
        <Button
          className={styles.button_bridge}
          text={t("connectBridge")}
          onClick={() => {}}
        />
      </div>
      <div className={styles.tags_block}>
        {linksIcons.map((item, index) => {
          return (
            <div key={index} className={styles.tags_item}>
              <div className={styles.tags_item_white}>
                <div className={styles.tags_item_black}>
                  <img src={item.icon} alt="item" />
                </div>
              </div>
              <span className="medium_text">{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
