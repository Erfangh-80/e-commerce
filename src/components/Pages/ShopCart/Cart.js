import React, { useContext } from "react";

// context
import { CartContext, ACTIONS } from "../../../context/CartContextProvider.js";

// functions helper
import { shorten } from "../../../helper/function.js";

// icons
import trash from "../../../assets/icons/trash.svg";

// Styles
import styles from "./Cart.module.css";
const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { title, imageSrc, quantity, price } = props.data;

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={imageSrc} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {
            quantity > 1 
            ? <button onClick={() =>dispatch({ type: ACTIONS.DECREASE, payload: props.data })}>-</button>
            : <button onClick={() =>dispatch({ type: ACTIONS.REMOVE_ITEM, payload: props.data })}><img src={trash} alt="trash" /></button>
        }
        
        <button onClick={() =>dispatch({ type: ACTIONS.INCREASE, payload: props.data })}>+</button>
      </div>
    </div>
  );
};

export default Cart;
