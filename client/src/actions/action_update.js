import axios from "axios";

export const UPDATE_TASK = "UPDATE_TASK";

export default function(id) {
  const url = `http://localhost:4000/update/${id}`;
  const request = axios.put(url);

  return {
    type: UPDATE_TASK,
    payload: request
  };
}
