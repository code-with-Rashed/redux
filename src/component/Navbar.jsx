import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import { useSelector } from "react-redux";

const Navbar = ({ changePage }) => {
  const carts = useSelector((state) => state.carts);
  const totalCartItem = carts.reduce(
    (acc, cart) => acc + (+cart.cartQuantity || 0),
    0,
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <img
          src={Logo}
          className="max-w-[140px] cursor-pointer"
          onClick={() => changePage(true)}
        />
        <div className="flex gap-4">
          <button
            className="navHome"
            id="lws-home"
            onClick={() => changePage(true)}
          >
            Home
          </button>
          <button
            className="navCart"
            id="lws-cart"
            onClick={() => changePage(false)}
          >
            <img src={Cart} width="20" height="20"></img>
            <span id="lws-totalCart">{totalCartItem}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
