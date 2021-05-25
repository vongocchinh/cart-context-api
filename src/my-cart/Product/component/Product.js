import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import Item from "./item";
import { ProductContext } from './../context/ProductContext';
import { useContext } from "react";

export default function Product() {
  const {state:{
    todo:{product}
  }} = useContext(ProductContext);
  const showData = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return <Item value={value} key={key} />;
      });
    }

    return result;
  };
  return (
    <>
      <div className="container">
        <Grid container className="grow" spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={10}>
              {showData(product)}
            </Grid>
          </Grid>
        </Grid>

      </div>
    </>
  );
}
