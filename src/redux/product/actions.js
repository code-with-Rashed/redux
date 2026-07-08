import { ADD_NEW_PRODUCT, REDUCE_PRODUCT_QUANTITY } from "./actionTypes";

export const addNewProduct = (product) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: product,
  };
};

export const reduceProductQuantity = (id) => {
  return {
    type: REDUCE_PRODUCT_QUANTITY,
    payload: id,
  };
};
