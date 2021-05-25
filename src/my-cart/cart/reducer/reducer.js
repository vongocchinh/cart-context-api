import * as types from "./../constant/cart";

export const reducer = (state, action) => {
  const {
    todo: { cart },
  } = state;
  switch (action.type) {
    case types.ADD_CART:
      state = {
        ...state,
        todo: {
          cart: [...cart, action.payload],
        },
      };
      localStorage.setItem("cart",JSON.stringify(cart))
      return state;
    case types.UPDATE_REDUCTION_CART:
      state = {
        ...state,
        todo: {
          cart: action.payload,
        },
      };
      localStorage.setItem("cart",JSON.stringify(cart))
      return state;
    case types.UPDATE_INCREASE_CART:
      state = {
        ...state,
        todo: {
          cart: action.payload,
        },
      };
      localStorage.setItem("cart",JSON.stringify(cart))
      return state;
    case types.DELETE_ITEM_CART:
      state = {
        ...state,
        todo: {
          cart: action.payload,
        },
      };
      localStorage.setItem("cart",JSON.stringify(cart))
      return state;
    default:
      break;
  }
};
