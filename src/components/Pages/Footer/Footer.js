import React from "react";

import Contents from "./ContentFooter/Contents.js";
import AboutUs from "./ContentFooter/AboutUs.js";
import Follow from "./ContentFooter/Follow.js";

import Styles from "../../../assets/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer id={Styles.footer}>
      <h1 className={Styles.header}>Footer</h1>
      <div className={Styles.container}>
        <AboutUs />
        <Contents />
        <Follow />
      </div>
    </footer>
  );
};

export default Footer;
