import React, { useEffect, useState } from "react";

// template
import Product from "../Product/Product.js";

// styles
import Styles from "../../../assets/styles/ElectronicProducts.module.css";

// API
import { getCategoryProducts } from "../../../services/Api.js";

const ElectronicProducts = () => {
  const [electronicProducts, setElectronicProducts] = useState([]);

  useEffect(() => {
    const getElectronicProducts = async () => {
      setElectronicProducts(await getCategoryProducts("electronics"))
    }

    getElectronicProducts();
  }, []);

  return (
    <div className={Styles.container}>
      <h1>Electronic products</h1>
      <div className={Styles.products}>
        {electronicProducts.map((product) => (
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

export default ElectronicProducts;
