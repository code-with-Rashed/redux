import { useSelector } from "react-redux";
import Cart from "./Cart";

const CartList = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <div className="space-y-6">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart}></Cart>
      ))}
    </div>
  );
};
export default CartList;
