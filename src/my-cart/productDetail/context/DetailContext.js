import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { initialState } from "./../../data";
import { reducer } from "./../reducer/reducer";

export const DetailContext = createContext({});
export const DetailProvider = ({ children }) => {
  const [stateDetail, dispatchDetail] = useReducer(reducer, initialState);
  return (
    <DetailContext.Provider
      value={{ state: stateDetail, dispatch: dispatchDetail }}
    >
      {children}
    </DetailContext.Provider>
  );
};
