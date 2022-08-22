import React, { useReducer, useEffect, createContext } from "react";

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

const sumItem = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumItem(state.selectedItems),
          checkout: false,
        })
      );

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItem(state.selectedItems),
        checkout: false,
      };
    case ACTIONS.REMOVE_ITEM:
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          selectedItems: [...newSelectedItems],
          ...sumItem(newSelectedItems),
          checkout: false,
        })
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItem(newSelectedItems),
      };
    case ACTIONS.INCREASE:
      const IndexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[IndexI].quantity++;
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          ...sumItem(state.selectedItems),
        })
      );
      return {
        ...state,
        ...sumItem(state.selectedItems),
      };
    case ACTIONS.DECREASE:
      const IndexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[IndexD].quantity--;
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          ...state,
          ...sumItem(state.selectedItems),
        })
      );
      return {
        ...state,
        ...sumItem(state.selectedItems),
      };
    case ACTIONS.CHECKOUT:
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          selectedItems: [],
          itemCounter: 0,
          totalPrice: 0,
          checkout: true,
        })
      );
      return {
        selectedItems: [],
        itemCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
    case ACTIONS.CLEAR:
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify({
          selectedItems: [],
          itemCounter: 0,
          totalPrice: 0,
          checkout: false,
        })
      );
      return {
        selectedItems: [],
        itemCounter: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const saveToLocale = () => {
    const savedItems = localStorage.getItem("shopStore-productslist");
    const parsedItems = JSON.parse(savedItems);
    if (savedItems != null) {
      initialState.selectedItems = parsedItems.selectedItems;
      initialState.itemCounter = parsedItems.itemCounter;
      initialState.totalPrice = parsedItems.totalPrice;
      initialState.checkout = parsedItems.checkout;
    }
  };
  useEffect(() => {
    saveToLocale();
  }, []);

  const savedItems = localStorage.getItem("shopStore-productslist");
  const parsedItems = JSON.parse(savedItems);
  if (savedItems != null) {
    initialState.selectedItems = parsedItems.selectedItems;
    initialState.itemCounter = parsedItems.itemCounter;
    initialState.totalPrice = parsedItems.totalPrice;
    initialState.checkout = parsedItems.checkout;
  }

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
