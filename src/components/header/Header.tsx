import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import logoFrog from "../../assets/icons/logo-footer-frog.svg";
import { Menu } from "../Menu/Menu";
import { Button } from "../button/Button";
import stylesGlobal from "../../router/route.style.module.scss";

export const Header: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1250) {
        closeBurgerMenu();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(event.target as Node)
      ) {
        closeBurgerMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.header_wrapper}>
      <div className={stylesGlobal.container}>
        <div className={styles.header_content}>
          <img src={logoFrog} alt="logo" className={styles.logo} />
          <Menu className={styles.menu} />
          <div className={styles.buttons_content}>
            <Button
              onClick={() => {}}
              text="TON Connect"
              className={styles.button}
            />
            <div className={styles.header_burger}>
              <button
                className={styles.burger_button}
                onClick={toggleBurgerMenu}
                aria-label="Toggle Menu"
              >
                <div className={styles.burger_bar}></div>
                <div className={styles.burger_bar}></div>
                <div className={styles.burger_bar}></div>
              </button>
              {isBurgerMenuOpen && (
                <div className={styles.burger_menu} ref={burgerMenuRef}>
                  <div
                    className={styles.cross}
                    onClick={toggleBurgerMenu}
                  ></div>
                  <Menu
                    onClick={toggleBurgerMenu}
                    className={styles.menu_list_burger}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
