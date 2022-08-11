import React from "react";

import styles from "./Product.module.css";


const Product = (props) => {

  const { title, imageSrc, price } = props

  return (
    <div className={styles.container}>
      <div className={styles.imageProduct}>
        <img src={imageSrc} alt=" product icon " />
      </div>

      <div className={styles.title}>
        <span>Name: </span>
        <span>{title?.split(" ")[0]}</span>
      </div>

      <div className={styles.priceProduct}>
        <span>Price: </span>
        <span>{price}</span>
      </div>

      <div className={styles.counter}>
        <p>
          <a href="/">Add to card</a>
        </p>
        <p>
          <a href="/">Detail</a>
        </p>
      </div>
    </div>
  );
};

export default Product;
