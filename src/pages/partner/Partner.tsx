import React from "react";
import styles from "./partner.styles.module.scss";
import { Title, WhiteBlock } from "../../components";
import { useTranslation } from "react-i18next";
import TfImage from "../../assets/TF.png";
import DefinderImage from "../../assets/Definder.png";
import dcImg from "../../assets/icons/DC.svg";
import dfcImg from "../../assets/icons/DFC.svg";

export const Partner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.partner_wrapper}>
      <Title className={styles.partner_title} text={t("partner")} />
      <div className={styles.partner_content}>
        <div className={styles.partners_box}>
          <div className={styles.image_box}>
            <img src={TfImage} alt="TF" />
            <img src={DefinderImage} alt="definder" />
          </div>
          <p className={styles.subTitle}>{t("partnershipAccelerates")}</p>
        </div>
      </div>
      <div className={styles.definder_content}>
        <Title
          text={
            <>
              <span>DEFINDER Capital</span>{" "}
              <span className={styles.white}>FUND (DFC)</span>
            </>
          }
        />
        <div className={styles.description_box}>
          <span className={styles.description}>{t("dfc")}</span>
          <div className={styles.tags_box}>
            <WhiteBlock img={dcImg} text="DeFinder Capital" />
            <WhiteBlock img={dfcImg} text="DFC Fund" />
          </div>
        </div>
      </div>
    </section>
  );
};
