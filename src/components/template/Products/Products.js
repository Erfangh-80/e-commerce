import React from "react";

import Product from "./Product.js";
import Styles from "../../../assets/styles/Products.module.css";

const Products = () => {
  return (
    <section id={Styles.products}>
      <div className={Styles.container}>
        <Product />
        <a href="/">More</a>
      </div>
    </section>
  );
};

export default Products;
