import React from "react";
import { CartContext } from "./../Context/CartContext";
import { useContext } from "react";
import * as types from "./../constant/cart";
import { Paper } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { FORMAT_CURRENT } from "../../Product/constant/product";
import { ModeContext } from './../../app/context/ModeContext';
export default function CartItem({ value }) {
  const {
    state: {
      todo: { cart },
    },
    dispatch,
  } = useContext(CartContext);
  const onDeleteCart = () => {
    var index = findIndex(cart, value.product.id);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    dispatch({
      type: types.DELETE_ITEM_CART,
      payload: cart,
    });
  };

  const {mode}=useContext(ModeContext);
  const style={
    color:mode?"black":"#ed4b82"
  }
  var findIndex = (data, id) => {
    var k = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].product.id === id) {
        k = i;
      }
    }
    return k;
  };
  const onCrease = () => {
    var index = findIndex(cart, value.product.id);
    if (index !== -1) {
      cart[index].quantity += 1;
    }
    dispatch({
      type: types.UPDATE_INCREASE_CART,
      payload: cart,
    });
  };
  const onIntroduct = () => {
    var index = findIndex(cart, value.product.id);
    if (index !== -1) {
      cart[index].quantity -= 1;
      if (cart[index].quantity < 1) {
        cart.splice(index, 1);
      }
    }
    dispatch({
      type: types.UPDATE_REDUCTION_CART,
      payload: cart,
    });
  };
  return (
    <>
      <tr style={style}>
        <td>{value.product.name}</td>
        <td>
          <img alt="###" src={value.product.img} />
        </td>
        <td>
          <div className="option-cart">
            <Paper style={style} className="paper" onClick={onIntroduct}>-</Paper>
            {value.quantity}
            <Paper style={style} className="paper" onClick={onCrease}>+</Paper>
          </div>
        </td>
        <td>{FORMAT_CURRENT(types.Total(value.quantity,value.product.price))} $</td>
        <td>
          <p onClick={onDeleteCart}><DeleteIcon className="icon-ma" size="small" color="secondary" /></p>
        </td>
      </tr>
    </>
  );
}
