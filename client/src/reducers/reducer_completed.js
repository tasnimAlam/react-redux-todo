import { FETCH_COMPLETED } from "../actions/action_completed";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMPLETED:
      return action.payload;
    default:
      return state;
  }
}
