import axios from "axios";
import React, { useEffect, useState } from "react";

import Product from "../../template/Product/Product.js";
import styles from "./Products.module.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  },[]);

  return (
    <div className={styles.container}>
      {
          data.map( product => (
            <Product key={product.id} imageSrc={product.image} price={product.price} title={product.title}/>
          ))
      }
      
    </div>
  );
};

export default Products;
