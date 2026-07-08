import { useDispatch } from "react-redux";
import Delete from "../assets/delete.svg";
import {
  addToCartItem,
  deleteCartItem,
  reduceCartItemQuantity,
} from "../redux/cart/actions";
const Cart = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image  */}
        <img className="lws-cartImage" src={cart.image} alt="product" />
        {/* cart item info  */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{cart.name}</h4>
          <p className="lws-cartCategory">{cart.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{cart.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons  */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity font-bold text-xl"
            onClick={() => dispatch(addToCartItem(cart))}
          >
            +
          </button>
          <span className="lws-cartQuantity">{cart.cartQuantity}</span>
          <button
            className="lws-decrementQuantity font-bold text-xl"
            onClick={() => dispatch(reduceCartItemQuantity(cart.id))}
          >
            -
          </button>
        </div>
        {/* price  */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{cart.total}</span>
        </p>
      </div>
      {/* delete button  */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => dispatch(deleteCartItem(cart.id))}
        >
          <img src={Delete}></img>
        </button>
      </div>
    </div>
  );
};
export default Cart;
