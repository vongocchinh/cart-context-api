import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Paper } from "@material-ui/core";
import { total_quantity } from "../../cart/constant/cart";
import { CartContext } from "./../../cart/Context/CartContext";
import { ModeContext } from "./../context/ModeContext";
import Switch from "@material-ui/core/Switch";
import { NavLink } from "react-router-dom";
export default function Header() {
  const {
    state: {
      todo: { cart },
    },
  } = useContext(CartContext);
  const {mode, setMode } = useContext(ModeContext);

  const onClick = () => {
    setMode((mode) => !mode);
  };
  const style={
    color:mode?"black":"#ed4b82"
  }
  const styleLink={
    color:mode?"white":"white",
    backgroundColor:mode?"black":"#ed4b82"
  }
  return (
    <>
      <div className="container-top">
        <h3 style={style}>Giỏ Hàng React Context Api</h3>
        <div className="header">
          <div>
            <NavLink  style={styleLink} className="link" to="/">
              Trang Chủ
            </NavLink>
            <NavLink style={styleLink} className="link" to="/cart">
              Giỏ Hàng
            </NavLink>
          </div>
          <div>
            <Button>
              <Paper style={style} className="quantity-header">{total_quantity(cart)}</Paper>{" "}
              <ShoppingCartIcon size="small" color="primary" />
            </Button>
            <Switch  variant="contained" onClick={onClick}>
              MODE
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
