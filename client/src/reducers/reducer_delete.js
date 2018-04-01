import { DELETE_TASK } from "../actions/action_delete";

export default function(state = [], action) {
  switch (action.type) {
    case DELETE_TASK:
      return action.payload.data;
    default:
      return state;
  }
}
