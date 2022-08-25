import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Api
import { getProduct } from "../../../services/Api";
// styles
import styles from "./DetailProduct.module.css";

const DetailProduct = () => {
  const [product, setProducts] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      setProducts(await getProduct(id));
    };

    fetchProduct();
  }, [id]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.image} alt="" />
      <div className={styles.textContainer}>
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}> category : {product.category}</p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}> {product.price} $</span>
          <Link to="/products">back to card</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
