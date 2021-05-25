import * as types from './../constant/product';
export const reducer = (state, action) => {
  const {
    todo: { product },
  } = state;
  switch (action.type) {
      case types.Product:
        state={
          ...state,
          todo:{product}
        }
        return state;
      default:
          return state;
  }
};
