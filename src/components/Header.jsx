import Notes from "../assets/notes.png";
import DoubleTick from "../assets/double-tick.png";
import Plus from "../assets/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  clearCompletedTodos,
  completeAllTodo,
} from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={addNewTodo}
      >
        <img src={Notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          name="add-todo"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-no-repeat bg-contain cursor-pointer"
          style={{ backgroundImage: `url(${Plus})` }}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={() => dispatch(completeAllTodo())}
        >
          <img className="w-4 h-4" src={DoubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => dispatch(clearCompletedTodos())}
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};
export default Header;
