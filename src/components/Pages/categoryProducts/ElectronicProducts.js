import React, { useEffect, useState } from "react";

import axios from "axios";
import Product from "./CategoryProduct.js";

import Styles from "../../../assets/styles/ElectronicProducts.module.css"

const ElectronicProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className={Styles.container}>
      <h1>Electronic products</h1>
      <Product products={data}/>
    </div>
  );
};

export default ElectronicProducts;
