import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/homepage" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={ShopCart} />
            <Route path="/detailproduct/:id" component={DetailProduct} />
            <Route path="/detailproduct" component={DetailProduct} />
            <Redirect to="/homepage" />
          </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
