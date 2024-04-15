import React from "react";
import styles from "./slider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface ISlider {
  slides: any;
}

export const Slider: React.FC<ISlider> = ({ slides }) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showStatus={false}
      swipeable={false}
    >
      {slides.map((slide: any, index: number) => (
        <div className={`${styles.slide_frog}`} key={index}>
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
    </Carousel>
  );
};
