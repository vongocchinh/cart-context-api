/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import ProductDetail from "./component/product";
import { useContext } from "react";
import { DetailContext } from "./context/DetailContext";
import { GET_PRODUCT_DETAIL } from "./constant/product";

export default function ContainerDetail(props) {
  const {
    state: {
      todo: { product},
      detail
    },
    dispatch,
  } = useContext(DetailContext);
  var id = props.match.params.id;
  useEffect(() => {
    var detail = {};
    detail = product.filter((element) => element.id === id);
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: detail[0],
    });
  }, [1]);
  return (
    <>
      <ProductDetail detail={detail} />
    </>
  );
}
