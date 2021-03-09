import { createStore, applyMiddleware } from "redux";
import todoReducer from "./todo/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
