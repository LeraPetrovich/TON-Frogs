import React from "react";
import styles from "./roadmap.styles.module.scss";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";
import line from "../../assets/icons/line.svg";
import { transform } from "typescript";
import styleGlobal from "../../router/route.style.module.scss";

export const Roadmap: React.FC = () => {
  const { t } = useTranslation();

  const roadItems = [
    {
      text: "Создание 3D коллекции 5555 NFTs",
      active: true,
    },
    {
      text: "Запуск социальных сетей",
      active: true,
    },
    {
      text: "Запуск первой версии сайта",
      active: true,
    },
    {
      text: "Пресейл 1111/5555 NFT",
      active: true,
    },
    {
      text: "Розыгрыш нескольких крутых призов",
      active: true,
    },
    {
      text: "Коллаборация с топ коллекциями и проектами на блокчейне TON",
      active: true,
    },
    {
      text: "Минтинг и запуск 1111/5555 NFT коллекции",
      active: true,
    },
    {
      text: "TON Frogs FUND (создание и запуск фонда)",
      active: true,
    },
    {
      text: "Обновление сайта (BETA)",
      active: true,
    },
    {
      text: "Выпуск токена Caviar Coin $CAVI",
      active: true,
    },
    {
      text: "Начало PR-кампании",
      active: false,
    },
    {
      text: "Fairlaunch $CAVI",
      active: false,
    },
    {
      text: "СеХ/DeХ listing $CAVI",
      active: false,
    },
    {
      text: "Staking TON Frogs NFT",
      active: false,
    },
    {
      text: "Staking $CAVI",
      active: false,
    },
    {
      text: "Запуск кроссчейн-моста XP.network",
      active: false,
    },
    {
      text: "Запуск социальных сетей(Twitter,Discord, TikTok, YouTube)",
      active: false,
    },
    {
      text: "Листинг коллекции на популярных маркетплейсах OpenSea, Rarible",
      active: false,
    },
    {
      text: "PR-кампания",
      active: false,
    },
    {
      text: "3D-печать реальных фигурок TON Frogs",
      active: false,
    },
    {
      text: "Выпуск мерча TON Frogs",
      active: false,
    },
    {
      text: "Запуск основной версии сайта",
      active: false,
    },
    {
      text: "Запуск TON Frogs Store (оплата CAVI )",
      active: false,
    },
    {
      text: "Пресейл - 1111 NFT (оплата TON/CAVI)",
      active: false,
    },
    {
      text: "Минт и запуск 2222/5555 NFT коллекции",
      active: false,
    },
    {
      text: "3D стикеры TON Frogs",
      active: false,
    },
    {
      text: "TON Frogs эмодзи",
      active: false,
    },
    {
      text: "Розыгрыш крутых призов среди холдеров TON Frogs / CAVI",
      active: false,
    },
    {
      text: "Выпуск серии промо-роликов TON Frogs",
      active: false,
    },
    {
      text: "Оффлайн мероприятие TON Frogs Community",
      active: false,
    },
  ];

  return (
    <div className={`${styleGlobal.container} ${styleGlobal.my_container}`}>
      <section className={styles.roadmap_wrapper}>
        <Title text={t("roadMap")} className={styles.title} />
        <div className={styles.roadmap_content}>
          <div className={` ${styles.roadmap_list}`}>
            {roadItems.map((item, index) => {
              return (
                <div className={`${styles.item_box} `}>
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
                    key={index}
                    className={`${styles.road_item} ${
                      item.active ? styles.active : ""
                    }`}
                  >
                    {item.text}
                  </div>
                  {/* <div className={styles.status}>
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={line}
                    alt="line"
                  />
                  <div className={styles.status_box}>-</div>
                </div> */}
                </div>
              );
            })}
          </div>
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
