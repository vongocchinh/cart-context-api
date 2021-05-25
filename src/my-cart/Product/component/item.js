import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext } from "react";
import "./styles.css";
import { CartContext } from "./../../cart/Context/CartContext";


import * as types from './../../cart/constant/cart';
import { FORMAT_CURRENT } from "../constant/product";

export default function Item({ value }) {
  const {
    state: {
      todo: { cart },
    },
    dispatch,
  } = useContext(CartContext);

const addCart = () => {

  var index=findIndex(cart,value.id);

  if(index!==-1){
    cart[index].quantity+=1;
    dispatch({
      type:types.UPDATE_INCREASE_CART,
      payload:cart
    })
  }else{
    var product={
      name:value.name,
      id:value.id,
      price:value.price,
      img:value.img
    }
    dispatch({
      type:types.ADD_CART,
      payload:{
        product,
        quantity:1
      }
    })
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
      <Card className="card">
        <CardActionArea>
          <img alt="###" src={value.img} className="img-product" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">
              <p>{value.name}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="CardActions">
          <Button size="small" color="primary">
            {FORMAT_CURRENT(value.price)} $
          </Button>
          <Button onClick={addCart} variant="contained" size="small"  color="primary">
            <ShoppingCartIcon size="small" />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}