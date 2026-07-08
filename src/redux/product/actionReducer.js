import { ADD_NEW_PRODUCT, REDUCE_PRODUCT_QUANTITY } from "./actionTypes";
import getId from "./getId";

const products = [];
const productReducer = (state = products, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [
        ...state,
        {
          id: getId(state),
          ...action.payload,
        },
      ];
    case REDUCE_PRODUCT_QUANTITY:
      return state.map((product) => {
        if (product.id !== action.payload) return product;
        const decreaseQuantity = product.quantity - 1;
        return {
          ...product,
          quantity: decreaseQuantity,
        };
      });
    default:
      return state;
  }
};

export default productReducer;
