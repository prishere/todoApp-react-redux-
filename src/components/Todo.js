import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, toggleChecked, removeTodo } from "../redux/todo/todoActions";
function Todo({ todo }) {
  // Events
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeTodo(todo.id));
  };
  const checkHandler = () => {
    dispatch(toggleChecked(todo.id));
  };
  const editHandler = () => {
    dispatch(editTodo(todo.id));
    dispatch(removeTodo(todo.id));
  };
  return (
    <div className="todo">
      <li
        onClick={editHandler}
        className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.value}
      </li>
      <button onClick={checkHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
