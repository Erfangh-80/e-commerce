import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { CartContext, ACTIONS } from "../../../context/CartContextProvider.js";
// helpers
import { shorten, isInCart, quantityCount } from "../../../helper/function";
// icons
import trash from "../../../assets/icons/trash.svg"
// styles
import styles from "./Product.module.css";

const Product = (props) => {
  const { state, dispatch } = useContext(CartContext);

  const { id, title, imageSrc, price } = props;
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={imageSrc} alt=" product " />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/detailproduct/${id}`}>Detail</Link>
        <div className={styles.buttonContainer}>
          {
            isInCart(state, id) 
            ? <button className={styles.smallButton} onClick={() => dispatch({type: ACTIONS.INCREASE, payload: props})}>+</button>
            : <button onClick={() => dispatch({type: ACTIONS.ADD_ITEM, payload: props})}>Add to Cart</button>
          }
          {quantityCount(state, id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: ACTIONS.REMOVE_ITEM, payload: props})}><img src={trash} alt="trash"/></button>}
          {quantityCount(state, id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: ACTIONS.DECREASE, payload: props})}>-</button>}
        </div>
      </div>
    </div>
  );
};

export default Product;
