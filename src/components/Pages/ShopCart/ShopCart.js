import React, { useContext } from "react";
import { Link } from "react-router-dom";

// components
import Cart from "./Cart.js";

// context
import { ACTIONS, CartContext } from "../../../context/CartContextProvider.js";

// Styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems?.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items:</span> {state.itemCounter}
          </p>
          <p>
            <span>Total Payments:</span> {state.totalPrice}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: ACTIONS.CHECKOUT })}
            >
              Check Out
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Check Out Successfuly</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {state.itemCounter === 0 && !state.checkout && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">go to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
