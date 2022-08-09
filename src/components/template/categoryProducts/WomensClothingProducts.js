import React, { useEffect, useState } from "react";

import axios from "axios";
import Product from "../Product/Product.js";

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
      <div className={Styles.products}>
        {data.map((product) => (
          <Product
            key={product.id}
            imageSrc={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default WomensClothingProducts;
