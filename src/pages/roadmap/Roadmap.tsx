import React from "react";
import styles from "./roadmap.styles.module.scss";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";
import line from "../../assets/icons/line.svg";
import { transform } from "typescript";

export const Roadmap: React.FC = () => {
  const { t } = useTranslation();

  const roadItems = [
    [
      {
        text: "Создание 3D коллекции 5555 NFTs",
      },

      {
        text: "Запуск первой версии сайта",
      },

      {
        text: "Розыгрыш нескольких крутых призов",
      },

      {
        text: "Минтинг и запуск 1111/5555 NFT коллекции",
      },

      {
        text: "Обновление сайта (BETA)",
      },

      {
        text: "Начало PR-кампании",
      },

      {
        text: "СеХ/DeХ listing $CAVI",
      },

      {
        text: "Staking $CAVI",
      },

      {
        text: "Запуск социальных сетей(Twitter,Discord, TikTok, YouTube)",
      },

      {
        text: "PR-кампания",
      },

      {
        text: "Выпуск мерча TON Frogs",
      },

      {
        text: "Запуск TON Frogs Store (оплата CAVI )",
      },

      {
        text: "Минт и запуск 2222/5555 NFT коллекции",
      },

      {
        text: "TON Frogs эмодзи",
      },

      {
        text: "Выпуск серии промо-роликов TON Frogs",
      },
    ],
    [
      {
        text: "Запуск социальных сетей",
      },
      {
        text: "Пресейл 1111/5555 NFT",
      },

      {
        text: "Коллаборация с топ коллекциями и проектами на блокчейне TON",
      },
      {
        text: "TON Frogs FUND (создание и запуск фонда)",
      },
      {
        text: "Выпуск токена Caviar Coin $CAVI",
      },
      {
        text: "Fairlaunch $CAVI",
      },
      {
        text: "Staking TON Frogs NFT",
      },
      {
        text: "Запуск кроссчейн-моста XP.network",
      },
      {
        text: "Листинг коллекции на популярных маркетплейсах OpenSea, Rarible",
      },
      {
        text: "3D-печать реальных фигурок TON Frogs",
      },
      {
        text: "Запуск основной версии сайта",
      },
      {
        text: "Пресейл - 1111 NFT (оплата TON/CAVI)",
      },
      {
        text: "3D стикеры TON Frogs",
      },
      {
        text: "Розыгрыш крутых призов среди холдеров TON Frogs / CAVI",
      },
      {
        text: "Оффлайн мероприятие TON Frogs Community",
      },
    ],
  ];

  return (
    <section className={styles.roadmap_wrapper}>
      <Title text={t("roadMap")} className={styles.title} />
      <div className={styles.roadmap_content}>
        <div className={` ${styles.roadmap_list} ${styles.left} `}>
          {roadItems[0].map((item, index) => {
            return (
              <div className={`${styles.item_box} ${styles.left} `}>
                <div key={index} className={styles.road_item}>
                  {item.text}
                </div>
                <div className={styles.status}>
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={line}
                    alt="line"
                  />
                  <div className={styles.status_box}>-</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={` ${styles.roadmap_list} ${styles.right} `}>
          {roadItems[1].map((item, index) => {
            return (
              <div className={styles.item_box}>
                <div className={styles.status}>
                  <div className={styles.status_box}>-</div>
                  <img src={line} alt="line" />
                </div>
                <div key={index} className={styles.road_item}>
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
