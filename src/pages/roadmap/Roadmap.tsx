import React, { useState, useEffect } from "react";
import styles from "./roadmap.module.scss";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";
import styleGlobal from "../../router/route.module.scss";
import romapBg from "../../assets/bg_romap.png";

export const Roadmap: React.FC = () => {
  const { t } = useTranslation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const roadItems = [
    {
      text: t("creating3D"),
      active: true,
    },
    {
      text: t("launchingSocial"),
      active: true,
    },
    {
      text: t("launchingSite"),
      active: true,
    },
    {
      text: t("preSaleNFT"),
      active: true,
    },
    {
      text: t("rafflePrizes"),
      active: true,
    },
    {
      text: t("collaborationTop"),
      active: true,
    },
    {
      text: t("mintingLaunch"),
      active: true,
    },
    {
      text: t("tonFrogsFund"),
      active: true,
    },
    {
      text: t("siteUpdateBeta"),
      active: true,
    },
    {
      text: t("caviarCoinToken"),
      active: true,
    },
    {
      text: t("startPRCampaign"),
      active: false,
    },
    {
      text: t("fairlaunchCAVI"),
      active: false,
    },
    {
      text: t("sexDexListingCAVI"),
      active: false,
    },
    {
      text: t("stakingTONFrogsNFT"),
      active: false,
    },
    {
      text: t("stakingCAVI"),
      active: false,
    },
    {
      text: t("launchCrossChainBridge"),
      active: false,
    },
    {
      text: t("launchSocialNetworks"),
      active: false,
    },
    {
      text: t("listingCollectionMarketplaces"),
      active: false,
    },
    {
      text: t("prCampaign"),
      active: false,
    },
    {
      text: t("printingTONFrogsFigures"),
      active: false,
    },
    {
      text: t("releaseTONFrogsMerch"),
      active: false,
    },
    {
      text: t("launchMainSiteVersion"),
      active: false,
    },
    {
      text: t("launchTONFrogsStore"),
      active: false,
    },
    {
      text: t("preSaleNFTPayment"),
      active: false,
    },
    {
      text: t("mintLaunchNFTCollection"),
      active: false,
    },
    {
      text: t("stickerTONFrogs"),
      active: false,
    },
    {
      text: t("emojiTONFrogs"),
      active: false,
    },
    {
      text: t("rafflePrizesHolders"),
      active: false,
    },
    {
      text: t("releasePromoVideosTONFrogs"),
      active: false,
    },
    {
      text: t("offlineEventTONFrogsCommunity"),
      active: false,
    },
  ];

  return (
    <div
      className={`${styleGlobal.container} ${
        screenWidth < 1440 ? styleGlobal.my_container : ""
      }`}
    >
      <section className={styles.roadmap_wrapper}>
        <Title text={t("roadMap")} className={styles.title} />
        <div className={styles.roadmap_content}>
          <img className={styles.romap_bg} src={romapBg} alt="bg" />
          <img className={styles.romap_bg} src={romapBg} alt="bg" />
          <div className={styles.roadmap_list}>
            {roadItems.map((item, index) => {
              return (
                <div className={`${styles.item_box} `} key={index}>
                  <div className={styles.status}>
                    <div
                      className={`${styles.status_box} ${
                        item.active ? styles.active : ""
                      }`}
                    >
                      {item.active ? (
                        <svg
                          width="31"
                          height="23"
                          viewBox="0 0 31 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.47274 21.7749C9.85882 22.1596 10.4165 22.416 10.9742 22.416C11.5319 22.416 12.0896 22.2023 12.4756 21.7749L29.9783 4.33661C30.8362 3.48179 30.8362 2.15682 29.9783 1.302C29.1203 0.447184 27.7904 0.447184 26.9325 1.302L10.9742 17.2016L4.06751 10.3631C3.20954 9.50826 1.87969 9.50826 1.02171 10.3631C0.163742 11.2179 0.163742 12.5429 1.02171 13.3977L9.47274 21.7749Z"
                            fill="#646464"
                          />
                        </svg>
                      ) : (
                        "—"
                      )}
                    </div>
                  </div>
                  <div
                    className={`${styles.road_item} ${
                      item.active ? styles.active : ""
                    }`}
                  >
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
