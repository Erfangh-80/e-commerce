import React, { useReducer, createContext } from "react";

export const ACTIONS = {
    ADD_ITEM: "Add_Item",
    REMOVE_ITEM: "Remove_Item",
    INCREASE: "Increase",
    DECREASE: "Decrease",
    CLEAR: "Clear",
    CHECKOUT: "Checkout",
};

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const setItem = (items) => {
  const itemCounter = items.reduce((total, product) => total + product.quantity, 0);
  const total = items.reduce((total, product) => total + product.price * product.quantity,0).toFixed(2);
  return {itemCounter, total}
}


const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...setItem(state.selectedItems),
        checkout: false
      };
    case ACTIONS.REMOVE_ITEM:
      const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...setItem(newSelectedItems),
      };
    case ACTIONS.INCREASE:
      const IndexI = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[IndexI].quantity++;
      return {
        ...state,
        ...setItem(state.selectedItems),
      };
    case ACTIONS.DECREASE:
      const IndexD = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[IndexD].quantity--;
      return {
        ...state,
        ...setItem(state.selectedItems),
      };
    case ACTIONS.CHECKOUT:
        return{
            selectedItems: [],
            itemCounter: 0,
            totalPrice: 0,
            checkout: true,
        }
    case ACTIONS.CLEAR:
        return{
            selectedItems: [],
            itemCounter: 0,
            totalPrice: 0,
            checkout: false,
        }  
    default:
      return state      
  }
};

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
