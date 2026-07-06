import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

const TodoApp = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Provider store={store}>
          <Header></Header>
          <hr className="mt-4" />
          <TodoList></TodoList>
          <hr className="mt-4" />
          <Footer></Footer>
        </Provider>
      </div>
    </div>
  );
};
export default TodoApp;
