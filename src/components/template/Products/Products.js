import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// components
import Product from "./Product.js";
import { getLimtProducts } from "../../../services/Api.js"

// style
import Styles from "../../../assets/styles/Products.module.css";

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getLimtProducts());
    }
    getProducts();

  },[])

  return (
    <section id={Styles.products}>
      <div className={Styles.container}>
        <Product data={products} />
        <Link to="/products">More</Link>
      </div>
    </section>
  );
};

export default Products;
