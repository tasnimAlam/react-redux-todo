import { combineReducers } from "redux";
import fetchCompleted from "./reducer_completed";
import fetchTodos from "./reducer_todo";
import fetchAll from "./reducer_all";
import addedTask from "./reducer_add";
import deleted from "./reducer_delete";
import updated from "./reducer_update";

const rootReducer = combineReducers({
  todos: fetchTodos,
  completed: fetchCompleted,
  all: fetchAll,
  addedTask: addedTask,
  deleted: deleted,
  updated: updated
});
export default rootReducer;
