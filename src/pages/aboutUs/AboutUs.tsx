import React from "react";
import styles from "./aboutAs.module.scss";
import { useTranslation } from "react-i18next";
import { Title } from "../../components";
import { Button } from "../../components";

//icons
import GetGems from "../../assets/icons/GetGems.svg";
import Disintar from "../../assets/icons/Disintar.svg";
import OpenSea from "../../assets/icons/OpenSea.svg";
import Rarible from "../../assets/icons/Rarible.svg";
import frogVideoAbout from "../../assets/video/major.mp4";
import frogVideoAboutWeb from "../../assets/video/major.webm";

const buttonItems = [
  {
    id: 1,
    icon: GetGems,
    text: "GetGems",
  },
  {
    id: 2,
    icon: Disintar,
    text: "Disintar",
  },
  {
    id: 3,
    icon: OpenSea,
    text: "OpenSea",
  },
  {
    id: 4,
    icon: Rarible,
    text: "Rarible",
  },
];

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className={styles.about_wrapper}>
          <div className={styles.welcome_block}>
            <div className={styles.content_block}>
              <div className={styles.text_box}>
                <Title text={t("welcomeTitle")} />
                <p className={styles.welcomeSubTitle}>
                  <span className="small_text">{t("welcomeSubTitle")}</span>
                </p>
              </div>
              <div className={styles.button_box}>
                {buttonItems.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      className={styles.button}
                      onClick={() => {}}
                      text={item.text}
                      icon={item.icon}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about_box}>
          <div className={styles.about_text_box}>
            <div>
              <Title text={t("whatAreTitle")} />
              <p className={styles.about_sub_title}>
                <span className="medium_text">{t("whatAreSubTitle")}</span>
              </p>
              <p className={styles.about_text}>
                <span className="small_text">{t("whatAreText")}</span>
              </p>
            </div>
            <div className={styles.unit_block}>
              <Title text="5 555 " className={styles.unit_text} />
              <Button
                className={styles.about_button}
                onClick={() => {}}
                text={t("uniqueUnits")}
              />
            </div>
          </div>
          <div className={styles.media_box}>
            <video autoPlay muted playsInline loop>
              <source src={frogVideoAbout} type='video/mp4; codecs="hvc1"' />
              <source src={frogVideoAboutWeb} type="video/webm" />
            </video>
          </div>
          <div className={styles.unit_block_small}>
            <Title text="5 555 " className={styles.unit_text} />
            <Button
              className={styles.about_button}
              onClick={() => {}}
              text={t("uniqueUnits")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
