import { ADD_TASK } from "../actions/action_add";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return action.payload;
    default:
      return state;
  }
}
