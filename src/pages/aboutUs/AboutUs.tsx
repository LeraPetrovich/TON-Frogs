import React from "react";
import styles from "./aboutAs.module.scss";
import { useTranslation } from "react-i18next";
import { Title, Button, GrayBlock } from "../../components";

//icons
import GetGems from "../../assets/icons/GG.svg";
import OpenSea from "../../assets/icons/OpenSea.svg";
import Rarible from "../../assets/icons/Rarible.svg";
import tonFrogsLogo from "../../assets/icons/ton_frogs_logo.svg";

//images
import jogerbg from "../../assets/joger_bg.png";
import superFrogbg from "../../assets/bg_superfrog.png";
import starwarsbg from "../../assets/starwars_bg.png";

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
    link: "https://getgems.io/tonfrogs",
    message: true,
  },
  {
    id: 3,
    icon: OpenSea,
    text: "OpenSea",
    link: "https://opensea.io/",
    message: true,
  },
  {
    id: 4,
    icon: Rarible,
    text: "Rarible",
    link: "https://rarible.com/",
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
                      onClick={() => window.open(item.link, "_blank")}
                      text={item.text}
                      iconRight={item.icon}
                      message={item.message}
                    />
                  );
                })}
              </div>
              <div className={styles.videos}>
                <div className={styles.video_item}>
                  <div
                    className={[styles.video_body, styles.superfrog].join(" ")}
                    style={{ backgroundImage: `url(${superFrogbg})` }}
                  >
                    <video width="600" autoPlay muted playsInline loop>
                      <source
                        src={superfrogMp4}
                        type='video/mp4; codecs="hvc1"'
                      />
                      <source src={superfrogWeb} type="video/webm" />
                    </video>
                    <div className={styles.video_footer}>
                      <span className={styles.footer_title}>TON Frogs</span>
                      <img src={tonFrogsLogo} alt="Ton Frogs Logo" />
                    </div>
                  </div>
                </div>
                <div className={styles.video_item}>
                  <div
                    className={[styles.video_body, styles.jogger].join(" ")}
                    style={{ backgroundImage: `url(${jogerbg})` }}
                  >
                    <video width="600" autoPlay muted playsInline loop>
                      <source
                        src={joggerFrogMp4}
                        type='video/mp4; codecs="hvc1"'
                      />
                      <source src={joggerFrogWeb} type="video/webm" />
                    </video>
                    <div className={styles.video_footer}>
                      <span className={styles.footer_title}>TON Frogs</span>
                      <img src={tonFrogsLogo} alt="Ton Frogs Logo" />
                    </div>
                  </div>
                </div>
                <div className={styles.video_item}>
                  <div
                    className={[styles.video_body, styles.starwars].join(" ")}
                    style={{ backgroundImage: `url(${starwarsbg})` }}
                  >
                    <video width="600" autoPlay muted playsInline loop>
                      <source
                        src={starwarsMp4}
                        type='video/mp4; codecs="hvc1"'
                      />
                      <source src={starwarsWeb} type="video/webm" />
                    </video>
                    <div className={styles.video_footer}>
                      <span className={styles.footer_title}>TON Frogs</span>
                      <img src={tonFrogsLogo} alt="Ton Frogs Logo" />
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
