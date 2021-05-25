import React from "react";
import { Switch, Route } from "react-router-dom";
import ContainerProduct from "./../my-cart/Product/Container";
import ContainerCart from "./../my-cart/cart/ContainerCart";
import ContainerDetail from './../my-cart/productDetail/Container';
export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ContainerProduct}></Route>
        <Route  path="/cart" component={ContainerCart}></Route>
        <Route path="/product-detail/:id" component={ContainerDetail}></Route>
      </Switch>
    </>
  );
}
