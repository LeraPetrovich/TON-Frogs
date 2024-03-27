import React from "react";
import styles from "./footer.module.scss";
import { useTranslation } from "react-i18next";
import stylesGlobal from "../../router/route.style.module.scss";

import { Menu } from "../menu/Menu";

//icons
import youTube from "../../assets/icons/youTube.svg";
import telegram from "../../assets/icons/telegram.svg";
import tikTok from "../../assets/icons/tik-tok.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import logoFooterFrog from "../../assets/icons/logo-footer-frog.svg";
import logoFooterTon from "../../assets/icons/logo-footer-ton.svg";
import { Title } from "../title/Title";

const logosItems = [
  {
    id: 1,
    link: "https://t.me/tonfrogs_en",
    icon: telegram,
  },
  {
    id: 2,
    link: "https://twitter.com/tonfrogs",
    icon: twitter,
  },
  {
    id: 3,
    link: "https://www.instagram.com/tonfrogs/",
    icon: instagram,
  },
  {
    id: 4,
    link: "https://www.tiktok.com/@tonfrogs",
    icon: tikTok,
  },
  {
    id: 5,
    link: "https://www.youtube.com/channel/UCmt13qATIZDvjol88MGfBnw",
    icon: youTube,
  },
];

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer_wrapper}>
      <div className={stylesGlobal.container}>
        <div className={styles.footer_content}>
          <img
            src={logoFooterFrog}
            alt="logo footer frog"
            className={styles.logo_footer_frog}
          />
          <div className={styles.footer_content_container}>
            <div className={styles.footer_content_menu}>
              <Menu />
            </div>
            <div className={styles.contact_container_logo}>
              <Title text={t("basedOnTon")} className={styles.text_logo} />
              <img src={logoFooterTon} alt="icon footer logo" />
            </div>
            <div className={styles.contact_container_icons}>
              {logosItems.map((item) => {
                return (
                  <a href={item.link} key={item.id}>
                    <img src={item.icon} key={item.id} alt="icon footer" />
                  </a>
                );
              })}
            </div>
            <div className={styles.link_text_footer_box}>
              <span>2024 TON FROGS 3D NFT</span>
              <span>{t("rightsReserved")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
