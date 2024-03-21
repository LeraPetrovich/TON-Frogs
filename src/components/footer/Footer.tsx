import React from "react";
import styles from "./footer.module.scss";
import { useTranslation } from "react-i18next";

import { Menu } from "../Menu/Menu";

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
    icon: telegram,
  },
  {
    id: 2,
    icon: twitter,
  },
  {
    id: 3,
    icon: instagram,
  },
  {
    id: 4,
    icon: tikTok,
  },
  {
    id: 5,
    icon: youTube,
  },
];

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_content}>
        <img
          src={logoFooterFrog}
          alt="logo footer frog"
          className={styles.logo_footer_frog}
        />
        <div className={styles.footer_content_container}>
          <div className={styles.contact_container}>
            <Title text="на базе ton" className={styles.text_logo} />
            <img src={logoFooterTon} alt="icon footer logo" />
          </div>
          <div className={styles.content_menu_box}>
            <Menu />
            <div className={styles.link_text_footer_box}>
              <span>2024 TON FROGS 3D NFT</span>
              <span>{t("rightsReserved")}</span>
            </div>
          </div>
          <div className={styles.contact_container}>
            {logosItems.map((item) => {
              return <img src={item.icon} key={item.id} alt="icon footer" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
