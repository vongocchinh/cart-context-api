import React, {  } from "react";
import Routers from "./../../router/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import {  CartProvider } from "./../cart/Context/CartContext";
import { ProductProvider } from "./../Product/context/ProductContext";
import "./styles.css";
import { NavLink } from "react-router-dom";


import { AppProvider } from "./context/Appcontext";
import Header from './component/header';

export default function App() {

  return (
    <>
      <Router>
        <AppProvider>
          <CartProvider>
            <ProductProvider>
              <div className="container-top">
                <h3>Giỏ Hàng React Context Api</h3>
                <div className="header">
                  <div>
                    <NavLink className="link" to="/">
                      Trang Chủ
                    </NavLink>
                    <NavLink className="link" to="/cart">
                      Giỏ Hàng
                    </NavLink>
                  </div>
                  <Header/>
                </div>
              </div>
              <Routers />
            </ProductProvider>
          </CartProvider>
        </AppProvider>
      </Router>
    </>
  );
}
