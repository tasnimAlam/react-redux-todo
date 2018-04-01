import axios from "axios";
export const DELETE_TASK = "DELETE_TASK";

export default function(id) {
  const url = "http://localhost:4000/delete";
  let request = axios.delete(url, { data: { id: id } });

  return {
    type: DELETE_TASK,
    payload: request
  };
}
