import { FETCH_TODOS } from "../actions/action_todos";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
}
