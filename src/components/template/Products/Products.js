import React from "react";
import { Link } from "react-router-dom";

import Product from "./Product.js";
import Styles from "../../../assets/styles/Products.module.css";

const Products = () => {
  return (
    <section id={Styles.products}>
      <div className={Styles.container}>
        <Product />
        <Link to="/products">More</Link>
      </div>
    </section>
  );
};

export default Products;
