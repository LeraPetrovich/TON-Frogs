import React from "react";
import styles from "./fond.styles.module.scss";
import { Title, Button } from "../../components";
import { useTranslation } from "react-i18next";

import fondbg from "../../assets/fond_bg.png";
import cardsImage from "../../assets/cards.png";
import ggIcon from "../../assets/icons/GG.svg";

import ironFrogMp4 from "../../assets/video/mp4/ironfrog_600.mp4";
import ironFrogWebm from "../../assets/video/web/ironfrog_600.webm";

export const Fond: React.FC = () => {
  const { t } = useTranslation();

  const listItems = [
    { id: 1, text: t("listFondFrogsItem1") },
    { id: 2, text: t("listFondFrogsItem2") },
    { id: 3, text: t("listFondFrogsItem3") },
  ];

  return (
    <section className={styles.fond_wrapper}>
      <div className={styles.fond_main}>
        <div className={styles.title_block}>
          <Title text={t("tonFrogsFond")} className={styles.title} />
        </div>
        <div className={styles.fond_image_block}>
          <img src={cardsImage} alt="cards" className={styles.fond_image} />
          <img src={fondbg} alt="bg" className={styles.fond_bg} />
        </div>
        <Button
          className={styles.button}
          iconRight={ggIcon}
          text="GetGems"
          onClick={() =>
            window.open(
              "https://getgems.io/collection/EQA8BrWceh49b2Og1fPmymjiZgh6JJ4jjz4EXK2jYEYYetOr",
              "_blank"
            )
          }
        />
      </div>
      <div className={styles.description_fond_box}>
        <div className={styles.description_fond_text_box}>
          <div className={styles.title_block}>{t("jointFund")}</div>
          <div className={styles.text_block}>{t("jointFund")}</div>
        </div>
        <div className={styles.list_container}>
          <div className={styles.list_box}>
            {listItems.map((item) => {
              return (
                <div key={item.id} className={styles.list_item}>
                  {item.text}
                </div>
              );
            })}
          </div>
          <div className={styles.media_box}>
            <video autoPlay muted playsInline loop>
              <source src={ironFrogMp4} type='video/mp4; codecs="hvc1"' />
              <source src={ironFrogWebm} type="video/webm" />
            </video>
          </div>
        </div>
        <Button
          text={t("joinTheFund")}
          onClick={() => {}}
          className={styles.button}
        />
      </div>
    </section>
  );
};
