import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  ADD_TEXT,
  TOGGLE_CHECKED,
  FILTER_TODOS
} from "./todoTypes";

const intialState = {
  todos: [],
  text: {
    value: ""
  },
  filtering: {
    filteredTodos: [],
    status: "all"
  }
};
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TEXT: {
      return {
        ...state,
        text: {
          ...state.text,
          value: action.payload
        }
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            value: action.payload,
            isCompleted: false
          }
        ],
        text: {
          value: ""
        }
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    }
    case EDIT_TODO: {
      const obj = state.todos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        text: obj
      };
    }
    case TOGGLE_CHECKED: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) return todo;
          todo.isCompleted = !todo.isCompleted;
          return todo;
        })
      };
    }
    case FILTER_TODOS: {
      let val = action.payload;
      let res = [];
      switch (val) {
        case "completed":
          res = state.todos.filter((todo) => todo.isCompleted === true);
          break;
        case "uncompleted":
          res = state.todos.filter((todo) => todo.isCompleted === false);
          break;
        default:
          res = state.todos;
      }
      return {
        ...state,
        filtering: {
          status: val,
          filteredTodos: res
        }
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
