import {
  ADD_TODO_PRIORITY,
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE_TODO,
} from "./actionTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const addTodoPriority = (todoId, color) => {
  return {
    type: ADD_TODO_PRIORITY,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const toggleCompleteTodo = (todoId) => {
  return {
    type: TOGGLE_COMPLETE_TODO,
    payload: todoId,
  };
};

export const completeAllTodo = () => {
  return {
    type: COMPLETE_ALL_TODO,
  };
};

export const clearCompletedTodos = () => {
  return {
    type: CLEAR_COMPLETED_TODOS,
  };
};
