import React from "react";
import styles from "./menu.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface IMenuItem {
  id: number;
  link: string;
  text: string;
  message?: string;
}

interface IMenu {
  className?: string;
  onClick?: () => void;
}

export const Menu: React.FC<IMenu> = ({ className, onClick }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const menuItems: IMenuItem[] = [
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
      link: "/caviar_coin",
      text: "Caviar Coin",
    },
    {
      id: 4,
      link: "/bridge",
      text: t("bridge"),
      message: t("soon"),
    },
    {
      id: 5,
      link: "/fond",
      text: t("fund"),
    },
    {
      id: 6,
      link: "/team",
      text: t("team"),
    },
    {
      id: 7,
      link: "/partner",
      text: t("partner"),
    },
    {
      id: 8,
      link: "/store",
      text: t("store"),
      message: t("soon"),
    },
  ];

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    const item = e.currentTarget.dataset.item;
    if (item) {
      const menuItem = menuItems[parseInt(item)];
      if (menuItem.link === "/store") {
        e.preventDefault();
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${styles.menu_box} ${className || ""}`}>
      {menuItems.map((item, index) => (
        <Link
          key={item.id}
          to={item.link}
          className={`${styles.link} ${
            item.link === location.pathname ? styles.active : ""
          }`}
          data-item={index}
          onClick={handleItemClick}
        >
          {item.text}
          {item.message && (
            <span className={styles.message}>{item.message}</span>
          )}
        </Link>
      ))}
    </div>
  );
};
