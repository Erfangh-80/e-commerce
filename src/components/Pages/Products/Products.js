import React, { useEffect, useState } from "react";

// Api
import { getProducts } from "../../../services/Api.js";

// template
import Product from "../../template/Product/Product.js";

// styles
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProduct = async () => {
      setProducts(await getProducts())
    }

    getAllProduct();
  },[]);

  return (
    <div className={styles.container}>
      {
          products.map( product => (
            <Product key={product.id} imageSrc={product.image} price={product.price} title={product.title}/>
          ))
      }
      
    </div>
  );
};

export default Products;
