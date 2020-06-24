import {
  SET_LOGGED_USER,
} from "./types";

export const setLoggedUser = (user) => {
  console.log("USER IN SET LOGGED USER:--", user);
  return {
    type: SET_LOGGED_USER,
    payload: user
  }
}