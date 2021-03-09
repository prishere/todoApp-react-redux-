import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addText, addTodo, filterTodos } from "../redux/todo/todoActions";
function Form() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.value);

  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    dispatch(addText(e.target.value));
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };
  const statusHandler = (e) => {
    // console.log(e.target.value);
    dispatch(filterTodos(e.target.value));
  };

  return (
    <form>
      <input
        value={text}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
