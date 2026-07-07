import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";

const ProductCartApp = () => {
  const [togglePage, setTogglePage] = useState(true);
  return (
    <>
      <Navbar changePage={setTogglePage}></Navbar>
      {togglePage && <HomePage></HomePage>}
      {!togglePage && <CartPage></CartPage>}
    </>
  );
};
export default ProductCartApp;
