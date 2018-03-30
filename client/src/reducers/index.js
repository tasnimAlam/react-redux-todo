import { combineReducers } from "redux";
import fetchCompletedReducer from "./reducer_completed";
import fetchTodosReducer from "./reducer_todo";
import fetchAll from "./reducer_all";

const rootReducer = combineReducers({
  todos: fetchTodosReducer,
  completed: fetchCompletedReducer,
  all: fetchAll
});
export default rootReducer;
