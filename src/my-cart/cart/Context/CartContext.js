import React, { createContext, useReducer } from "react";
import { initialState } from './../../data';
import { reducer } from './../reducer/reducer';

export const CartContext=createContext({});
export const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{state:stateCart,dispatch:dispatchCart}} >
      <div>{children}</div>
    </CartContext.Provider>
  );
};
