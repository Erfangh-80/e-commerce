import React from "react";

import Styles from "../../../assets/styles/Header.module.css";

const Header = () => {
  return (
    <header id={Styles.header}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1>E-commerce website</h1>
          <h3>electronics , jewelery , men's clothing , women's clothing</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
