import React from "react";

import TelegramIcon from "../../../../assets/icons/Telegram_logo.svg";
import youtube from "../../../../assets/icons/youtube.svg";
import Linkedin from "../../../../assets/icons/linkedin.svg";
import Instagram from "../../../../assets/icons/instagram.svg";

import Styles from "../../../../assets/styles/FollowFooter.module.css";

const Follow = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.header}>Follow</h1>
      <div className={Styles.content}>

        <div>
          <img src={TelegramIcon} alt="Telegram icon" />
        </div>

        <div>
          <img src={youtube} alt="youtube icon" />
        </div>

        <div>
          <img src={Linkedin} alt="youtube icon" />
        </div>

        <div>
          <img src={Instagram} alt="youtube icon" />
        </div>
        
      </div>
    </div>
  );
};

export default Follow;
