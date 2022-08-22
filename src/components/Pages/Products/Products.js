import React, { useContext } from "react";

// template
import Product from "../../template/Product/Product.js";

// styles
import styles from "./Products.module.css";

// context
import { ProductsContext } from "../../../context/ProductsContextProvider.js";

// icons
import loading from "../../../assets/icons/loading.gif";

const Products = () => {
  
  const products = useContext(ProductsContext);


  return (
    <div>
      <div className={styles.container}>
        {!products.length ? (
          <img className={styles.loading} src={loading} alt="loading" />
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imageSrc={product.image}
              price={product.price}
              title={product.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
