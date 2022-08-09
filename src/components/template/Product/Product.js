import React from "react";

import Styles from "./Product.module.css";


const Product = (props) => {

  const { title, imageSrc, price } = props

  return (
    <div className={Styles.container}>
      <div className={Styles.imageProduct}>
        <img src={imageSrc} alt=" product icon " />
      </div>

      <div className={Styles.title}>
        <span>Name: </span>
        <span>{title?.split(" ")[0]}</span>
      </div>

      <div className={Styles.priceProduct}>
        <span>Price: </span>
        <span>{price}</span>
      </div>

      <div className={Styles.counter}>
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
