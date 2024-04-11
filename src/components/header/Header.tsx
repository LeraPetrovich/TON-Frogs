import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { Menu } from "../menu/Menu";
import { LanguageSwitcher } from "../languageSwitcher/LanguageSwitcher";
import stylesGlobal from "../../router/route.module.scss";
import { Link } from "react-router-dom";

//video
import logoMp4 from "../../assets/video/mp4/logo_300_safari.mp4";
import logoWebm from "../../assets/video/web/logo_300_chrome.webm";

export const Header: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) {
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

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`${styles.header_wrapper} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={stylesGlobal.container}>
        <div className={styles.header_content}>
          <div className={styles.header_menu}>
            <Link to={"/"} onClick={handleClickLink}>
              <div className={styles.logo}>
                <video autoPlay muted playsInline loop>
                  <source src={logoMp4} type='video/mp4; codecs="hvc1"' />
                  <source src={logoWebm} type="video/webm" />
                </video>
              </div>
            </Link>
            <Menu className={styles.menu} />
          </div>
          <LanguageSwitcher className={styles.switcher} />
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
                <div className={styles.cross} onClick={toggleBurgerMenu}></div>
                <Menu
                  onClick={toggleBurgerMenu}
                  className={styles.menu_list_burger}
                />
                <LanguageSwitcher className={styles.switcher_burger} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
