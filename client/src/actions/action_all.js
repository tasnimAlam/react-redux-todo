import axios from "axios";
export const FETCH_ALL = "FETCH_ALL";

export default function(url) {
  let request = axios.get(url);
  
  return {
    type: FETCH_ALL,
    payload: request
  };
}
