import { combineReducers } from "redux";
import productReducer from "./product/actionReducer";
import cartReducer from "./cart/actionReducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
