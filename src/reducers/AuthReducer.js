import {
  SET_LOGGED_USER
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  authToken: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken
      }
    default:
      return state;
  }
}