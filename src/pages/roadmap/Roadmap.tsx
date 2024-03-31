import React, { useState, useEffect } from "react";
import styles from "./roadmap.styles.module.scss";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";
import line from "../../assets/icons/line.svg";
import styleGlobal from "../../router/route.style.module.scss";

export const Roadmap: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    console.log(screenWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const roadItemsSmall = [
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

  const roadItems = [
    [
      {
        text: t("creating3D"),
        active: true,
      },

      {
        text: t("launchingSite"),
        active: true,
      },

      {
        text: t("rafflePrizes"),
        active: true,
      },

      {
        text: t("mintingLaunch"),
        active: true,
      },

      {
        text: t("siteUpdateBeta"),
        active: true,
      },

      {
        text: t("startPRCampaign"),
        active: false,
      },

      {
        text: t("sexDexListingCAVI"),
        active: false,
      },

      {
        text: t("stakingCAVI"),
        active: false,
      },

      {
        text: t("launchSocialNetworks"),
        active: false,
      },

      {
        text: t("prCampaign"),
        active: false,
      },

      {
        text: t("releaseTONFrogsMerch"),
        active: false,
      },

      {
        text: t("launchTONFrogsStore"),
        active: false,
      },

      {
        text: t("mintLaunchNFTCollection"),
        active: false,
      },

      {
        text: t("emojiTONFrogs"),
        active: false,
      },

      {
        text: t("releasePromoVideosTONFrogs"),
        active: false,
      },
    ],
    [
      {
        text: t("launchingSocial"),
        active: true,
      },
      {
        text: t("preSaleNFT"),
        active: true,
      },

      {
        text: t("collaborationTop"),
        active: true,
      },
      {
        text: t("tonFrogsFund"),
        active: true,
      },
      {
        text: t("caviarCoinToken"),
        active: true,
      },
      {
        text: t("fairlaunchCAVI"),
        active: false,
      },
      {
        text: t("stakingTONFrogsNFT"),
        active: false,
      },
      {
        text: t("launchCrossChainBridge"),
        active: false,
      },
      {
        text: t("listingCollectionMarketplaces"),
        active: false,
      },
      {
        text: t("printingTONFrogsFigures"),
        active: false,
      },
      {
        text: t("launchMainSiteVersion"),
        active: false,
      },
      {
        text: t("preSaleNFTPayment"),
        active: false,
      },
      {
        text: t("stickerTONFrogs"),
        active: false,
      },
      {
        text: t("rafflePrizesHolders"),
        active: false,
      },
      {
        text: t("offlineEventTONFrogsCommunity"),
        active: false,
      },
    ],
  ];

  return (
    <div className={`${styleGlobal.container} ${styleGlobal.my_container}`}>
      <section className={styles.roadmap_wrapper}>
        <Title text={t("roadMap")} className={styles.title} />
        <div className={styles.roadmap_content}>
          {screenWidth < 1440 && (
            <div className={styles.roadmap_list_small}>
              {roadItemsSmall.map((item, index) => {
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
          )}
          {screenWidth >= 1440 && (
            <div className={styles.romap_colums}>
              <div className={` ${styles.roadmap_list}`}>
                {roadItems[0].map((item, index) => {
                  return (
                    <div
                      className={`${styles.item_box} ${
                        styles[`item1_${index}_${i18n.language}`]
                      }`}
                      key={index}
                    >
                      <div
                        className={`${styles.road_item} ${
                          item.active ? styles.active : ""
                        }`}
                      >
                        <span>{item.text}</span>
                      </div>
                      <div className={`${styles.status} ${styles.left}`}>
                        <img src={line} alt="line" />
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
                    </div>
                  );
                })}
              </div>
              <div className={styles.line}></div>
              <div className={` ${styles.roadmap_list}`}>
                {roadItems[1].map((item, index) => {
                  return (
                    <div
                      className={`${styles.item_box} ${
                        styles[`item2_${index}_${i18n.language}`]
                      }`}
                      key={index}
                    >
                      <div className={`${styles.status} ${styles.right}`}>
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
                        <img src={line} alt="line" />
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
          )}
        </div>
      </section>
    </div>
  );
};

// {
//     text: "Создание 3D коллекции 5555 NFTs",
//   },
//   {
//     text: "Запуск социальных сетей",
//   },
//   {
//     text: "Запуск первой версии сайта",
//   },
//   {
//     text: "Пресейл 1111/5555 NFT",
//   },
//   {
//     text: "Розыгрыш нескольких крутых призов",
//   },
//   {
//     text: "Коллаборация с топ коллекциями и проектами на блокчейне TON",
//   },
//   {
//     text: "Минтинг и запуск 1111/5555 NFT коллекции",
//   },
//   {
//     text: "TON Frogs FUND (создание и запуск фонда)",
//   },
//   {
//     text: "Обновление сайта (BETA)",
//   },
//   {
//     text: "Выпуск токена Caviar Coin $CAVI",
//   },
//   {
//     text: "Начало PR-кампании",
//   },
//   {
//     text: "Fairlaunch $CAVI",
//   },
//   {
//     text: "СеХ/DeХ listing $CAVI",
//   },
//   {
//     text: "Staking TON Frogs NFT",
//   },
//   {
//     text: "Staking $CAVI",
//   },
//   {
//     text: "Запуск кроссчейн-моста XP.network",
//   },
//   {
//     text: "Запуск социальных сетей(Twitter,Discord, TikTok, YouTube)",
//   },
//   {
//     text: "Листинг коллекции на популярных маркетплейсах OpenSea, Rarible",
//   },
//   {
//     text: "PR-кампания",
//   },
//   {
//     text: "3D-печать реальных фигурок TON Frogs",
//   },
//   {
//     text: "Выпуск мерча TON Frogs",
//   },
//   {
//     text: "Запуск основной версии сайта",
//   },
//   {
//     text: "Запуск TON Frogs Store (оплата CAVI )",
//   },
//   {
//     text: "Пресейл - 1111 NFT (оплата TON/CAVI)",
//   },
//   {
//     text: "Минт и запуск 2222/5555 NFT коллекции",
//   },
//   {
//     text: "3D стикеры TON Frogs",
//   },
//   {
//     text: "TON Frogs эмодзи",
//   },
//   {
//     text: "Розыгрыш крутых призов среди холдеров TON Frogs / CAVI",
//   },
//   {
//     text: "Выпуск серии промо-роликов TON Frogs",
//   },
//   {
//     text: "Оффлайн мероприятие TON Frogs Community",
//   },
// ];

//old version
// [
//   {
//     text: "Создание 3D коллекции 5555 NFTs",
//   },

//   {
//     text: "Запуск первой версии сайта",
//   },

//   {
//     text: "Розыгрыш нескольких крутых призов",
//   },

//   {
//     text: "Минтинг и запуск 1111/5555 NFT коллекции",
//   },

//   {
//     text: "Обновление сайта (BETA)",
//   },

//   {
//     text: "Начало PR-кампании",
//   },

//   {
//     text: "СеХ/DeХ listing $CAVI",
//   },

//   {
//     text: "Staking $CAVI",
//   },

//   {
//     text: "Запуск социальных сетей(Twitter,Discord, TikTok, YouTube)",
//   },

//   {
//     text: "PR-кампания",
//   },

//   {
//     text: "Выпуск мерча TON Frogs",
//   },

//   {
//     text: "Запуск TON Frogs Store (оплата CAVI )",
//   },

//   {
//     text: "Минт и запуск 2222/5555 NFT коллекции",
//   },

//   {
//     text: "TON Frogs эмодзи",
//   },

//   {
//     text: "Выпуск серии промо-роликов TON Frogs",
//   },
// ],
// [
//   {
//     text: "Запуск социальных сетей",
//   },
//   {
//     text: "Пресейл 1111/5555 NFT",
//   },

//   {
//     text: "Коллаборация с топ коллекциями и проектами на блокчейне TON",
//   },
//   {
//     text: "TON Frogs FUND (создание и запуск фонда)",
//   },
//   {
//     text: "Выпуск токена Caviar Coin $CAVI",
//   },
//   {
//     text: "Fairlaunch $CAVI",
//   },
//   {
//     text: "Staking TON Frogs NFT",
//   },
//   {
//     text: "Запуск кроссчейн-моста XP.network",
//   },
//   {
//     text: "Листинг коллекции на популярных маркетплейсах OpenSea, Rarible",
//   },
//   {
//     text: "3D-печать реальных фигурок TON Frogs",
//   },
//   {
//     text: "Запуск основной версии сайта",
//   },
//   {
//     text: "Пресейл - 1111 NFT (оплата TON/CAVI)",
//   },
//   {
//     text: "3D стикеры TON Frogs",
//   },
//   {
//     text: "Розыгрыш крутых призов среди холдеров TON Frogs / CAVI",
//   },
//   {
//     text: "Оффлайн мероприятие TON Frogs Community",
//   },
// ],
