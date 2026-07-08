import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const ProductCartApp = () => {
  const [togglePage, setTogglePage] = useState(true);
  return (
    <>
      <Provider store={store}>
        <Navbar changePage={setTogglePage}></Navbar>
        {togglePage && <HomePage></HomePage>}
        {!togglePage && <CartPage></CartPage>}
      </Provider>
    </>
  );
};
export default ProductCartApp;
