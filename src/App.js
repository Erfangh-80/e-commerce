import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Styles from "./App.css";

import Navbar from "./components/template/Navbar/Navbar.js";
import Home from "./components/Pages/Home/HomePage.js";
import SignUp from "./components/Pages/Form/SignUp.js";
import Login from "./components/Pages/Form/Login.js";
import Products from "./components/Pages/Products/Products";
import ProductsContextProvider from "./context/ProductsContextProvider";

const App = () => {
  return (
    <div className={Styles.container}>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/homepage" component={Home} />
        <ProductsContextProvider>
          <Route path="/products" component={Products} />
        </ProductsContextProvider>
        <Redirect from="/" to="/homepage" />
      </Switch>
    </div>
  );
};

export default App;
