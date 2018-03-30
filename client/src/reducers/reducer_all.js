import { FETCH_ALL } from "../actions/action_all";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return state;
  }
}
