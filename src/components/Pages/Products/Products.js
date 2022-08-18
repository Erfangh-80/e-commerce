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
  const Products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {!Products.length ? (
        <img className={styles.loading} src={loading} alt="loading" />
      ) : (
        Products.map((product) => (
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
  );
};

export default Products;
