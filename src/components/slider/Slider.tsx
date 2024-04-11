import React, { useState, useEffect } from "react";
import styles from "./slider.module.scss";

interface ISlider {
  slides: any;
}

export const Slider: React.FC<ISlider> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slider_list}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <div
              className={`${styles.video_body} ${styles[slide.videoType]}`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <video width="600" autoPlay muted playsInline loop>
                <source src={slide.mp4} type='video/mp4; codecs="hvc1"' />
                <source src={slide.webm} type="video/webm" />
              </video>
              <div className={styles.video_footer}>
                <span className={styles.footer_title}>TON Frogs</span>
                <img src={slide.logo} alt="Ton Frogs Logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
