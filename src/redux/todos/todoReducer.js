import {
  ADD_TODO_PRIORITY,
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE_TODO,
} from "./actionTypes";

const getId = (data) => {
  let id = 1;
  if (!data.length) return id;
  id = data[data.length - 1].id + 1;
  return id;
};

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: getId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case ADD_TODO_PRIORITY:
      return state.map((todo) => {
        return todo.id === action.payload.todoId
          ? { ...todo, color: action.payload.color }
          : todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE_COMPLETE_TODO:
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case COMPLETE_ALL_TODO:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED_TODOS:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
export default todoReducer;
