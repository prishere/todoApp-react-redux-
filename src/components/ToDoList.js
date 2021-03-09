import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { filterTodos } from "../redux/todo/todoActions";
function ToDoList() {
  const todos = useSelector((state) => state.todos);
  const filteredTodos = useSelector((state) => state.filtering.filteredTodos);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.filtering.status);
  useEffect(() => {
    dispatch(filterTodos(status));
  }, [status, todos, dispatch]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
