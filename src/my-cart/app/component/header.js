import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Paper } from "@material-ui/core";
import { total_quantity } from "../../cart/constant/cart";
import { CartContext } from "./../../cart/Context/CartContext";
export default function Header() {
    const {
        state: {
          todo: { cart },
        },
      } = useContext(CartContext);
  return (
    <>
      <Button>
          <Paper className="quantity-header">{total_quantity(cart)}</Paper>{" "}
        <ShoppingCartIcon size="small" color="primary" />
      </Button>
    </>
  );
}
