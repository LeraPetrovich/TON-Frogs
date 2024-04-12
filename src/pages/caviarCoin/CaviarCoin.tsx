import React, { useEffect, useState } from "react";
import styles from "./caviarCoin.module.scss";
import { Title, GrayBlock, Button } from "../../components";
import { useTranslation } from "react-i18next";
import coinbg from "../../assets/backgroudCoin.svg";
import chart from "../../assets/Frame.png";
import telegram from "../../assets/icons/telegram_button.svg";
import coinMp4 from "../../assets/video/mp4/coin_833.mp4";
import coinWeb from "../../assets/video/web/coin_833.webm";

export const CaviarCoin: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [linkTelegram, setLinkTelegram] = useState("");

  useEffect(() => {
    if (i18n.language === "ru") {
      setLinkTelegram("https://t.me/tonfrogs");
    } else {
      setLinkTelegram("https://t.me/frogs");
    }
  }, [i18n.language]);

  const chartInformationItem = [
    {
      text: "5,500,000 $CAVI - Staking NFT TON Frogs",
      color: "#FFFFFF",
    },
    {
      text: "5,000,000 $CAVI - Fairlaunch",
      color: "#024873",
    },
    {
      text: "4,500,000 $CAVI - Listing DeX DeDust",
      color: "#0378A6",
    },
    {
      text: "4,500,000 $CAVI - Subsequent listings DeX & CeX.",
      color: "#0F9BF2",
    },
    {
      text: `2,500,000 $CAVI - ${t("team")}`,
      color: "#00B7FF",
    },
    {
      text: `1,500,000 $CAVI - ${t("marketing")}`,
      color: "#35F2F2",
    },
    {
      text: `1,000,000 $CAVI - ${t("tonFrogsFoundation")}`,
      color: "#94E9F2",
    },
    {
      text: `500,000 $CAVI - Boosting pools and rewards`,
      color: "#D2FAFE",
    },
  ];

  return (
    <section className={`${styles.caviar_coin_block}`}>
      <div className={styles.caviar_coin_main}>
        <div className={styles.title_block}>
          <Title text="CAVIAR COIN" />
          <p className={styles.subtitle}>{t("caviarSubTitle")}</p>
        </div>
        <div className={styles.coin_image_block}>
          <div className={styles.coin_image}>
            <video autoPlay muted playsInline loop>
              <source src={coinMp4} type='video/mp4; codecs="hvc1"' />
              <source src={coinWeb} type="video/webm" />
            </video>
          </div>
          <img src={coinbg} alt="bg" className={styles.coin_bg} />
        </div>
      </div>
      <div className={styles.token_box}>
        <Title text="Tokenomics CAVIAR COIN" className={styles.title_token} />
        <span className={`${styles.token_subtitle} small_text`}>
          {t("tokenCaviarCoinText")}
        </span>
      </div>
      <div className={styles.graph_box}>
        <img src={chart} className={styles.chart} alt="chart" />
        <div className={styles.points_box}>
          <div className={styles.volume_box}>
            <GrayBlock className={styles.gray_block}>
              {t("totalVolume")}
            </GrayBlock>
            <div className={styles.poin_volume_block}>
              <p className={styles.poin_volume_number}>25,000,000</p>
              <p className={styles.poin_volume_text}>$CAVI</p>
            </div>
          </div>
          <div className={styles.chart_item}>
            {chartInformationItem.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div
                    className={styles.item_circle}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <p className={styles.item_text}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.form_receipt}>
        <p className={styles.form_receipt_title}>{t("formReceiptTitle")}</p>
        <div className={styles.form_block}>
          <div className={styles.form_block_top}>
            <GrayBlock className={styles.gray_button}>
              {t("dexExchanges")}
            </GrayBlock>
            <div className={styles.buttons_block}>
              <Button
                className={styles.button_form}
                onClick={() => window.open("https://dedust.io/", "_blank")}
                text="dedust.io"
              />
              <Button
                className={styles.button_form}
                onClick={() => window.open("https://ston.fi/", "_blank")}
                text="ston.fi"
              />
            </div>
            <Button
              iconLeft={telegram}
              className={styles.button_telegram}
              onClick={() => window.open(linkTelegram, "_blank")}
              text="Telegram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
