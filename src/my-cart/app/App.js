import React from "react";
import Routers from "./../../router/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./../cart/Context/CartContext";
import { ProductProvider } from "./../Product/context/ProductContext";
import "./styles.css";
import { AppProvider } from "./context/Appcontext";
import Header from "./component/header";
import { ModeProvider } from "./context/ModeContext";
import { DetailProvider } from './../productDetail/context/DetailContext';
export default function App() {
  return (
    <>
      <Router>
        <AppProvider>
          <ModeProvider>
            <DetailProvider>
            <CartProvider>
              <ProductProvider>
                <Header/>
                <Routers />
              </ProductProvider>
            </CartProvider>
            </DetailProvider>
          </ModeProvider>
        </AppProvider>
      </Router>
    </>
  );
}
