import React, { useState, useRef, useEffect } from "react";
import styles from "./fond.module.scss";
import { Title, Button } from "../../components";
import { useTranslation } from "react-i18next";

//videos

import goldCardMp4 from "../../assets/video/mp4/gold_600.mp4";
import platinumCardMp4 from "../../assets/video/mp4/platinum_600.mp4";
import sliverCardMp4 from "../../assets/video/mp4/silver_600.mp4";

import goldCardWeb from "../../assets/video/web/gold__600.webm";
import platinumCardWeb from "../../assets/video/web/platinum_600.webm";
import sliverCardWeb from "../../assets/video/web/silver_600.webm";

import fondbg from "../../assets/fond_bg.png";
import ggIcon from "../../assets/icons/GG.svg";
import ggIconDart from "../../assets/icons/GetGemsDark.svg";

import ironFrogMp4 from "../../assets/video/mp4/ironfrog_600x600_safari.mp4";
import ironFrogWebm from "../../assets/video/web/ironfrog_600.webm";

export const Fond: React.FC = () => {
  const { t } = useTranslation();
  const [videoBodyWidth, setVideoBodyWidth] = useState<number[]>([]);
  const [videoBodyHeight, setVideoBodyHeight] = useState<number[]>([]);
  const videoBodyRef = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loadedVideos, setLoadedVideos] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const getWidth = () => {
      const widths = videoBodyRef.current.map((videoBody) => {
        return videoBody ? videoBody.clientWidth : 0;
      });
      setVideoBodyWidth(widths);
    };
    const getHeight = () => {
      const height = videoBodyRef.current.map((videoBody) => {
        return videoBody ? videoBody.clientWidth : 0;
      });
      setVideoBodyHeight(height);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    getWidth();
    getHeight();
    window.addEventListener("resize", getWidth);
    window.addEventListener("resize", getHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", getWidth);
      window.removeEventListener("resize", getHeight);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const listItems = [
    { id: 1, text: t("listFondFrogsItem1") },
    { id: 2, text: t("listFondFrogsItem2") },
    { id: 3, text: t("listFondFrogsItem3") },
  ];

  const videoItems = [
    {
      videoMp4: platinumCardMp4,
      videoWebm: platinumCardWeb,
    },
    {
      videoMp4: goldCardMp4,
      videoWebm: goldCardWeb,
    },
    {
      videoMp4: sliverCardMp4,
      videoWebm: sliverCardWeb,
    },
  ];

  const markVideoAsLoaded = (index: number) => {
    setLoadedVideos((currentLoaded) => {
      const newLoaded = [...currentLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  useEffect(() => {
    if (loadedVideos.every((status) => status === true)) {
      videoBodyRef.current.forEach((videoElement) => {
        if (videoElement && videoElement.children[0]) {
          (videoElement.children[0] as HTMLVideoElement).play();
        }
      });
    }
  }, [loadedVideos]);

  return (
    <section className={styles.fond_wrapper}>
      <div className={styles.fond_main}>
        <div className={styles.title_block}>
          <Title text={t("tonFrogsFond")} className={styles.title} />
        </div>
        <div className={styles.fond_image_block}>
          <div
            className={styles.videos}
            style={{
              height: `${videoBodyHeight[0]}px`,
            }}
          >
            {videoItems.map((item, index) => (
              <div
                key={index}
                className={styles.video_body}
                style={{
                  marginLeft:
                    index !== 0 ? `-${videoBodyWidth[index] / 4}px` : 0,
                }}
                ref={(element) => (videoBodyRef.current[index] = element)}
              >
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  onEnded={(e) => e.currentTarget.play()}
                >
                  <source src={item.videoMp4} type='video/mp4; codecs="hvc1"' />
                  <source src={item.videoWebm} type="video/webm" />
                </video>
              </div>
            ))}
          </div>
          <img src={fondbg} alt="bg" className={styles.fond_bg} />
        </div>
        <Button
          className={styles.button}
          iconRight={screenWidth > 768 ? ggIcon : ggIconDart}
          text="GetGems"
          onClick={() =>
            window.open(
              "https://getgems.io/collection/EQA8BrWceh49b2Og1fPmymjiZgh6JJ4jjz4EXK2jYEYYetOr",
              "_blank"
            )
          }
        />
      </div>
      <div className={styles.description_fond_box}>
        <div className={styles.description_fond_text_box}>
          <div className={styles.title_block}>{t("jointFund")}</div>
          <div className={styles.text_block}>{t("ourGoal")}</div>
        </div>
        <div className={styles.list_container}>
          <div className={styles.list_box}>
            {listItems.map((item) => (
              <div key={item.id} className={styles.list_item}>
                {item.text}
              </div>
            ))}
          </div>
          <div className={styles.media_box}>
            <video autoPlay muted playsInline loop>
              <source src={ironFrogMp4} type='video/mp4; codecs="hvc1"' />
              <source src={ironFrogWebm} type="video/webm" />
            </video>
          </div>
        </div>
        <Button
          text={t("joinTheFund")}
          onClick={() => window.open("https://t.me/tonfrogs_bot", "_blank")}
          className={styles.button}
        />
      </div>
    </section>
  );
};
