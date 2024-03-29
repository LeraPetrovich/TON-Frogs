import React from "react";
import styles from "./team.style.module.scss";
import { Title } from "../../components";
import { useTranslation } from "react-i18next";

//video mp4
import docMp4 from "../../assets/video/mp4/doc_600_safari.mp4";
import starwarsMp4 from "../../assets/video/mp4/starwars_600_safari.mp4";
import superfrogMp4 from "../../assets/video/mp4/superfrog_600_safari.mp4";
import spacexMp4 from "../../assets/video/mp4/spacex_600_safari.mp4";
import venomMp4 from "../../assets/video/mp4/venom_600_safari.mp4";
import remboMp4 from "../../assets/video/mp4/rembo_600_safari.mp4";

//video web
import docWeb from "../../assets/video/web/doc_600_chrome.webm";
import starwarsWeb from "../../assets/video/web/starwars_600_chrome.webm";
import superfrogWeb from "../../assets/video/web/superfrog_600_chrome.webm";
import spacexWeb from "../../assets/video/web/spacex_600_chrome.webm";
import venomWeb from "../../assets/video/web/venom_600_chrome.webm";
import remboWeb from "../../assets/video/web/rembo_600_chrome.webm";

export const Team: React.FC = () => {
  const teamItems = [
    {
      id: 1,
      video_mp4: docMp4,
      video_web: docWeb,
      status: "Ceo TON Frogs",
      name: "Narek Mkhoyan",
    },
    {
      id: 2,
      video_mp4: spacexMp4,
      video_web: spacexWeb,
      status: "Art-Director",
      name: "Amal' Gabrelian",
    },
    {
      id: 3,
      video_mp4: venomMp4,
      video_web: venomWeb,
      status: "3D Generalist",
      name: "Yuryi Artcybashev",
    },
    {
      id: 4,
      video_mp4: starwarsMp4,
      video_web: starwarsWeb,
      status: "3D Animator",
      name: "Alex Glintveyn",
    },
    {
      id: 5,
      video_mp4: superfrogMp4,
      video_web: superfrogWeb,
      status: "3D Animator & Gamedev",
      name: "Abdumalik Tokhirov",
    },
    {
      id: 6,
      video_mp4: remboMp4,
      video_web: remboWeb,
      status: "3D Artist",
      name: "Tatiana oliverka",
    },
  ];

  const { t } = useTranslation();

  return (
    <section className={styles.team_wrapper}>
      <Title text={t("team")} className={styles.team_title} />
      <div className={styles.team_box}>
        {teamItems.map((item) => {
          return (
            <div className={styles.team_item} key={item.id}>
              <div className={styles.team_body}>
                <video autoPlay muted playsInline loop>
                  <source
                    src={item.video_mp4}
                    type='video/mp4; codecs="hvc1"'
                  />
                  <source src={item.video_web} type="video/webm" />
                </video>
              </div>
              <div className={styles.badge}>
                <span className={styles.badge_status}>{item.status}</span>
                <span className={styles.badge_name}>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
