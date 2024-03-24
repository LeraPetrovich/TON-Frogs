import React from "react";
import styles from "./caviarCoin.styles.module.scss";
import { Title, GrayBlock, Button } from "../../components";
import { useTranslation } from "react-i18next";
import coinImage from "../../assets/caviarCoin.png";
import coinbg from "../../assets/backgroudCoin.svg";
import chart from "../../assets/Frame.png";
import telegram from "../../assets/icons/telegram_button.svg";

export const CaviarCoin: React.FC = () => {
  const { t } = useTranslation();

  const chartInformationItem = [
    {
      text: "СеХ/DeХ listing",
      color: "#171717",
    },
    {
      text: "Fairlaunch",
      color: "#383838",
    },
    {
      text: "Staking NFT TON Frogs ",
      color: "#5b5b5b",
    },
    {
      text: t("team"),
      color: "#999",
    },
    {
      text: t("marketing"),
      color: "#c0c0c0",
    },
    {
      text: t("tonFrogsFoundation"),
      color: "#e8e8e8",
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
          <img src={coinImage} alt="coin image" className={styles.coin_image} />
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
                onClick={() => {}}
                text="dedust.io"
              />
              <Button
                className={styles.button_form}
                onClick={() => {}}
                text="ston.fi"
              />
            </div>
            <Button
              iconLeft={telegram}
              className={styles.button_telegram}
              onClick={() => {}}
              text="Telegram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
