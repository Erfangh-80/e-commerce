import React, { useEffect, useState } from "react";

// template
import Product from "../Product/Product.js";

// API
import { getCategoryProducts } from "../../../services/Api.js";

// styles
import Styles from "../../../assets/styles/ElectronicProducts.module.css";

const WomensClothingProducts = () => {
  const [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => {
    const getWomensClothingProducts = async () => {
      setWomensClothing(await getCategoryProducts("women's clothing"))
    }

    getWomensClothingProducts();
  },[]);

  return (
    <div className={Styles.container}>
      <h1>women's clothing</h1>
      <div className={Styles.products}>
        {womensClothing.map((product) => (
          <Product
            key={product.id}
            id={product.id}
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
