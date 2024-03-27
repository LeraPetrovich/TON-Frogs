import React from "react";
import styles from "./aboutAs.module.scss";
import { useTranslation } from "react-i18next";
import { Title, Button, GrayBlock } from "../../components";

//icons
import GetGems from "../../assets/icons/GG.svg";
import Disintar from "../../assets/icons/Disintar.svg";
import OpenSea from "../../assets/icons/OpenSea.svg";
import Rarible from "../../assets/icons/Rarible.svg";

//video mp4
import frogVideoAbout from "../../assets/video/mp4/major_600.mp4";
import joggerFrogMp4 from "../../assets/video/mp4/jogger_600_safari.mp4";
import starwarsMp4 from "../../assets/video/mp4/starwars_600_safari.mp4";
import superfrogMp4 from "../../assets/video/mp4/superfrog_600_safari.mp4";
//video web
import frogVideoAboutWeb from "../../assets/video/web/major_600.webm";
import joggerFrogWeb from "../../assets/video/web/jogger_600_chrome.webm";
import starwarsWeb from "../../assets/video/web/starwars_600_chrome.webm";
import superfrogWeb from "../../assets/video/web/superfrog_600_chrome.webm";

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
    <section>
      <div className={styles.about_wrapper}>
        <div className={styles.welcome_block}>
          <div className={styles.content_block}>
            <div className={styles.text_box}>
              <Title
                text={
                  <>
                    <span className={styles.white}>{t("welcomeTitle")}</span>{" "}
                    <span>{t("color")}</span>
                  </>
                }
              />
              <p className={styles.welcomeSubTitle}>
                <span className="small_text">{t("welcomeSubTitle")}</span>
              </p>
            </div>
            <div className={styles.bottom_box_content}>
              <div className={styles.button_box}>
                {buttonItems.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      className={styles.button}
                      onClick={() => {}}
                      text={item.text}
                      iconRight={item.icon}
                    />
                  );
                })}
              </div>
              <div className={styles.videos}>
                <div className={styles.welcome_vieo_box}>
                  <div className={`${styles.video_item} ${styles.superfrog}`}>
                    <div className={styles.video_body}>
                      <video width="600" autoPlay muted playsInline loop>
                        <source
                          src={superfrogMp4}
                          type='video/mp4; codecs="hvc1"'
                        />
                        <source src={superfrogWeb} type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>
                <div className={styles.welcome_vieo_box}>
                  <div className={`${styles.video_item} ${styles.jogger}`}>
                    <div className={styles.video_body}>
                      <video width="600" autoPlay muted playsInline loop>
                        <source
                          src={joggerFrogMp4}
                          type='video/mp4; codecs="hvc1"'
                        />
                        <source src={joggerFrogWeb} type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>{" "}
                <div className={styles.welcome_vieo_box}>
                  <div className={`${styles.video_item} ${styles.starwars}`}>
                    <div className={styles.video_body}>
                      <video width="600" autoPlay muted playsInline loop>
                        <source
                          src={starwarsMp4}
                          type='video/mp4; codecs="hvc1"'
                        />
                        <source src={starwarsWeb} type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_box}>
        <div className={styles.about_text_box}>
          <div>
            <Title
              text={
                <>
                  <span className={styles.white}>{t("whatAreTitle")}</span>{" "}
                  <span>{t("color")} ?</span>
                </>
              }
            />
            <p className={styles.about_sub_title}>
              <span className="medium_text">{t("whatAreSubTitle")}</span>
            </p>
            <p className={styles.about_text}>
              <span className="small_text">{t("whatAreText")}</span>
            </p>
          </div>
          <div className={styles.unit_block}>
            <Title text="5 555 " className={styles.unit_text} />
            <GrayBlock className={styles.grayBlock}>
              {t("uniqueUnits")}
            </GrayBlock>
          </div>
        </div>
        <div className={styles.media_box}>
          <video width={800} autoPlay muted playsInline loop>
            <source src={frogVideoAbout} type='video/mp4; codecs="hvc1"' />
            <source src={frogVideoAboutWeb} type="video/webm" />
          </video>
        </div>
        <div className={styles.unit_block_small}>
          <Title text="5 555 " className={styles.unit_text} />
          <GrayBlock className={styles.grayBlock}>{t("uniqueUnits")}</GrayBlock>
        </div>
      </div>
    </section>
  );
};
