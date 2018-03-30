import axios from "axios";
export const FETCH_TODOS = "FETCH_sTODOS";

export function fetchTodos(url) {
  let request = axios.get(url);

  return {
    type: FETCH_TODOS,
    payload: request
  };
}
