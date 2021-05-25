import React from "react";
import CartItem from "./cartItem";
import { CartContext } from "./../Context/CartContext";
import { useContext } from "react";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FORMAT_CURRENT } from "../../Product/constant/product";
import { total_cart } from "../constant/cart";
import { total_quantity } from './../constant/cart';

export default function Cart() {
  const {
    state: {
      todo: { cart },
    },
  } = useContext(CartContext);
  const showProduct = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return <CartItem value={value} key={key} />;
      });
    }

    return result;
  };
  return (
    <>
      <div className="container">
        <Paper className="paper-table">
          <table>
            <thead>
              <tr>
                <th>Tên Sản Phẩm</th>
                <th>Anh Sản Phẩm</th>
                <th>Số Lượng</th>
                <th>Tổng Tiền</th>
                <th style={{width:100}}></th>
              </tr>
            </thead>
            <tbody>{showProduct(cart)}</tbody>
          </table>
        </Paper>
        <div className="container-total">
          <Paper className="paper-container-total">
            <table>
              <tr>
                <th>Tổng tiền</th>
                <td>{FORMAT_CURRENT(total_cart(cart))} $</td>
              </tr>
              <tr>
                <th>Tổng Sản phẩm</th>
                <td>{total_quantity(cart)}</td>
              </tr>
              <tr>
                <th>
                  <Button variant="contained" color="primary">Thanh Toán</Button>
                </th>
              </tr>
            </table>
          </Paper>
        </div>
      </div>
    </>
  );
}
