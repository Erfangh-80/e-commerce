import React, { useContext } from "react";

// template
import Product from "../../template/Product/Product.js";

// styles
import styles from "./Products.module.css";

// context
import { ProductsContext } from "../../../context/ProductsContextProvider.js";

const Products = () => {
  const Products = useContext(ProductsContext);
  
  return (
    <div className={styles.container}>
      {Products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          imageSrc={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  );
};

export default Products;
