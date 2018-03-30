import { combineReducers } from "redux";
import TodoReducer from "./reducer_todo";
import CompletedReducer from "./reducer_completed";
import AllReducer from "./reducer_all";

const rootReducer = combineReducers({
  todos: TodoReducer,
  completed: CompletedReducer,
  all: AllReducer
});
export default rootReducer;
