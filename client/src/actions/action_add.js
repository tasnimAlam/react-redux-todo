import axios from "axios";

export const ADD_TASK = "ADD_TASK";

export default function(task) {
  const url = "http://localhost:4000/add";
  let request = axios.post(url, { task: task });

  return {
    type: ADD_TASK,
    payload: request
  };
}
