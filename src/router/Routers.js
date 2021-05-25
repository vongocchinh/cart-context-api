import React from "react";
import { Switch, Route } from "react-router-dom";
import ContainerProduct from "./../my-cart/Product/Container";
import ContainerCart from "./../my-cart/cart/ContainerCart";

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ContainerProduct}></Route>
        <Route exact path="/cart" component={ContainerCart}></Route>
      </Switch>
    </>
  );
}
