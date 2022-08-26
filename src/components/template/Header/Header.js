import React from "react";
// Styles
import styles from "../../../assets/styles/Header.module.css";
// icons
import store from "../../../assets/icons/store.png"

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
            <h1>E-commerce website</h1>
            <h3>electronics , jewelery , men's clothing , women's clothing</h3>
        </div>
        <div className={styles.logoBanner}>
          <img src={store} alt="banner" />
        </div>
      </div>
    </header>
  );
};

export default Header;
