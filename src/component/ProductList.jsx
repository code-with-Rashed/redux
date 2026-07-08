import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      {!products.length && (
        <p className="text-center font-bold">No Product Found.</p>
      )}
    </div>
  );
};
export default ProductList;
