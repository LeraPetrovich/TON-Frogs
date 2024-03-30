import React from "react";
import styles from "./partner.styles.module.scss";
import { useTranslation } from "react-i18next";
import { Title } from "../../components";
import definderMp4 from "../../assets/video/mp4/definder_600.mp4";
import definderWebm from "../../assets/video/web/definder_600.webm";
import { Button } from "../../components";

export const Partner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.partner_wrapper}>
      <div className={styles.content_box}>
        <div className={styles.text_box}>
          <Title
            text={
              <>
                <span className={styles.white}>DeFinder</span>{" "}
                <span>Capital Fund (DFC)</span>
              </>
            }
          />
          <div className={styles.subtitle_box}>
            <span className="small_text">{t("dfc")}</span>
          </div>
        </div>
        <div className={styles.video_box}>
          <video autoPlay muted playsInline loop>
            <source src={definderMp4} type='video/mp4; codecs="hvc1"' />
            <source src={definderWebm} type="video/webm" />
          </video>
          <div className={styles.video_bg}></div>
        </div>
      </div>
      <Button
        onClick={() => window.open("https://definder.fund/", "_blank")}
        text="Definder.fund"
        className={styles.partner_button}
      />
    </section>
  );
};
