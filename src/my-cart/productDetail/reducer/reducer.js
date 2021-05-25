import * as types from "./../constant/product";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_DETAIL:
      state = {
        ...state,
        detail:action.payload
      };
      return state;
    default:
      return state;
  }
};
