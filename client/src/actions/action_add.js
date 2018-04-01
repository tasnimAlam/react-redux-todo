import axios from "axios";

export const ADD_TASK = "ADD_TASK";

export default function(url, task) {
  let request = axios.post(url, { task: task });

  return {
    type: ADD_TASK,
    payload: request
  };
}
