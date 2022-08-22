import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// styles
import Styles from "./App.css";
// components
import Navbar from "./components/template/Navbar/Navbar.js";
import Home from "./components/Pages/Home/HomePage.js";
import SignUp from "./components/Pages/Form/SignUp.js";
import Login from "./components/Pages/Form/Login.js";
import Products from "./components/Pages/Products/Products.js";
import DetailProduct from "./components/Pages/DetailProduct/DetailProduct.js";
import ShopCart from "./components/Pages/ShopCart/ShopCart.js";
// context
import ProductsContextProvider from "./context/ProductsContextProvider.js";
import CartContextProvider from "./context/CartContextProvider.js";

const App = () => {
  return (
    <div className={Styles.container}>
      <Navbar />
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/detailproduct/:id" element={<DetailProduct />} />
            <Route path="/detailproduct" element={<DetailProduct />} />
            <Route path="/*" element={<Navigate to="/homepage" />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
