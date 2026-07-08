import {
  ADD_TO_CART_ITEM,
  DELETE_CART_ITEM,
  REDUCE_CART_ITEM_QUANTITY,
} from "./actionTypes";

const initialCart = [];
const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART_ITEM: {
      const newItem = action.payload;
      const existItem = state.find((item) => item.id === newItem.id);
      if (existItem) {
        return state.map((item) => {
          if (item.id !== newItem.id) return item;

          const canIncrease = item.cartQuantity < item.quantity;

          if (!canIncrease) return item;

          const nextQuantity = item.cartQuantity + 1;

          return {
            ...item,
            cartQuantity: nextQuantity,
            total: item.price * nextQuantity,
          };
        });
      }

      return [
        ...state,
        {
          ...newItem,
          cartQuantity: 1,
          total: newItem.price,
        },
      ];
    }
    case REDUCE_CART_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        const canDecrease = item.cartQuantity > 1;
        if (!canDecrease) return item;
        const decreaseQuantity = item.cartQuantity - 1;
        return {
          ...item,
          cartQuantity: decreaseQuantity,
          total: item.price * decreaseQuantity,
        };
      });
    case DELETE_CART_ITEM:
      return state.filter((cart) => cart.id !== action.payload);
    default:
      return state;
  }
};
export default cartReducer;
