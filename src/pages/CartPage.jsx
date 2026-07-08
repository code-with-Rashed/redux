import Bill from "../component/Bill";
import CartList from "../component/CartList";

const CartPage = () => {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <CartList></CartList>
          <Bill></Bill>
        </div>
      </div>
    </main>
  );
};
export default CartPage;
