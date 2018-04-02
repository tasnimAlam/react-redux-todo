import { UPDATE_TASK } from "../actions/action_update";

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_TASK:
      return action.payload.data;
    default:
      return state;
  }
}
