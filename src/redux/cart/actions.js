import {
  ADD_TO_CART_ITEM,
  DELETE_CART_ITEM,
  REDUCE_CART_ITEM_QUANTITY,
} from "./actionTypes";

export const addToCartItem = (product) => {
  return {
    type: ADD_TO_CART_ITEM,
    payload: product,
  };
};

export const reduceCartItemQuantity = (id) => {
  return {
    type: REDUCE_CART_ITEM_QUANTITY,
    payload: id,
  };
};

export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: id,
  };
};
