import React, { useEffect, useState } from "react";

import axios from "axios";
import Product from "./CategoryProduct.js";

import Styles from "../../../assets/styles/ElectronicProducts.module.css";

const WomensClothingProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => setData(response.data));
  });

  return (
    <div className={Styles.container}>
        <h1>women's clothing</h1>
        <Product products={data} />
    </div>
  );
};

export default WomensClothingProducts;
