import React from "react";
import styles from "./menu.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface IMenu {
  className?: string;
}

export const Menu: React.FC<IMenu> = ({ className }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const menuItems = [
    {
      id: 1,
      link: "/",
      text: t("aboutUs"),
    },
    {
      id: 2,
      link: "/roadmap",
      text: t("roadmap"),
    },
    {
      id: 3,
      link: "/bridge",
      text: t("bridge"),
    },
    {
      id: 4,
      link: "/сaviar_сoin",
      text: "Caviar Coin",
    },
    {
      id: 5,
      link: "/fund",
      text: t("fund"),
    },
    {
      id: 6,
      link: "/team",
      text: t("team"),
    },
    {
      id: 7,
      link: "/store",
      text: "Store",
    },
  ];
  return (
    <div className={`${styles.menu_box} ${className || ""}`}>
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          className={`${styles.link} ${
            item.link === location.pathname ? styles.active : ""
          }`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};
