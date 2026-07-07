const Product = () => {
  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2026/june/20260706-recd7s4tkjluxh691-flus-flca-bts-visnav-brand/20260706-recd7s4TKJLuxh691-FLUS-FLCA-BTS-VisNav-Brand-NB-D.jpg"
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">Spring and summershoes</h4>
        <p className="lws-productCategory">Mens shoes</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">400</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">10</span>
          </p>
        </div>
        <button className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  );
};
export default Product;
