import React from "react";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import { CartContext } from './../../cart/Context/CartContext';
import * as types from '../../cart/constant/cart';
export default function ProductDetail({ detail }) {
  const {
    state: {
      todo: { cart },
    },
    dispatch,
  } = useContext(CartContext);

  const addCart = () => {
    var index = findIndex(cart, detail.id);

    if (index !== -1) {
      cart[index].quantity += 1;
      dispatch({
        type: types.UPDATE_INCREASE_CART,
        payload: cart,
      });
    } else {
      var product = {
        name: detail.name,
        id: detail.id,
        price: detail.price,
        img: detail.img,
      };
      dispatch({
        type: types.ADD_CART,
        payload: {
          product,
          quantity: 1,
        },
      });
    }
  };
  var findIndex = (data, id) => {
    var k = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].product.id === id) {
        k = i;
      }
    }
    return k;
  };
  return (
    <>
      <div className="container">
        <div className="container-detail">
          <div className="container-detail-layout">
            <img src={detail.img} alt="###" />
          </div>
          <div className="container-detail-layout">
            <p>{detail.name}</p>
            <p>{detail.price}</p>
            <Button variant="contained" onClick={addCart} color="primary">
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
