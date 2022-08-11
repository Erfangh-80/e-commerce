import React from "react";
import { shorten } from "../../../helper/function";

import styles from "./Product.module.css";

const Product = (props) => {
  const { title, imageSrc, price } = props;

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={imageSrc} alt=" product " />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <div className={styles.linkContainer}>
        <a href="/">Detail</a>
        <div className={styles.buttonContainer}>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
