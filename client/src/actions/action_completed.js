import axios from "axios";
export const FETCH_COMPLETED = "FETCH_COMPLETED";

export function fetchCompleted(url) {
  let request = axios.get(url);

  return {
    type: FETCH_COMPLETED,
    payload: request
  };
}
