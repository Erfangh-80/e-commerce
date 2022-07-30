import React from "react";

import Styles from "../../../assets/styles/CategoryProduct.module.css"

const Categoryproduct = (props) => {
  const { products } = props;
  return (
    <div className={Styles.container}>
      {products.map((product) => (
        <div key={product.id} className={Styles.product}>
          <img src={product.image} alt="" />
          <h3>{product.title.split(" ")[0]}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Categoryproduct;
