import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  ADD_TEXT,
  TOGGLE_CHECKED,
  FILTER_TODOS
} from "./todoTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id
  };
};

export const addText = (text) => {
  return {
    type: ADD_TEXT,
    payload: text
  };
};
export const toggleChecked = (id) => {
  return {
    type: TOGGLE_CHECKED,
    payload: id
  };
};
export const filterTodos = (value) => {
  return {
    type: FILTER_TODOS,
    payload: value
  };
};
