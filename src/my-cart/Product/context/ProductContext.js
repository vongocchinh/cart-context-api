import React, { createContext } from "react";
import { initialState } from './../../data';
import { reducer } from '../reducer/productReducer';
import { useReducer } from "react";
export const ProductContext = createContext({});
export const ProductProvider = ({ children }) => {
  const [stateProduct, dispatchProduct] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{state:stateProduct,dispatch:dispatchProduct}}>
      <div>{children}</div>
    </ProductContext.Provider>
  );
};


