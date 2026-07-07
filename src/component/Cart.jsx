import Delete from "../assets/delete.svg";
const Cart = () => {
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image  */}
        <img
          className="lws-cartImage"
          src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2026/june/20260706-recd7s4tkjluxh691-flus-flca-bts-visnav-brand/20260706-recd7s4TKJLuxh691-FLUS-FLCA-BTS-VisNav-Brand-NB-D.jpg"
          alt="product"
        />
        {/* cart item info  */}
        <div className="space-y-2">
          <h4 className="lws-cartName">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
          </h4>
          <p className="lws-cartCategory">Men's clothing</p>
          <p>
            BDT <span className="lws-cartPrice">1100</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons  */}
        <div className="flex items-center space-x-4">
          <button className="lws-incrementQuantity font-bold">+</button>
          <span className="lws-cartQuantity">2</span>
          <button className="lws-decrementQuantity font-bold">-</button>
        </div>
        {/* price  */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">2200</span>
        </p>
      </div>
      {/* delete button  */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart">
          <img src={Delete}></img>
        </button>
      </div>
    </div>
  );
};
export default Cart;
