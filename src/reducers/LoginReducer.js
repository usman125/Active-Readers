import {
  INPUT_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actions/types";

const INITIAL_STATE = {
  errorMsg: '',
  loading: false,
  email: '',
  password: '',
  redirect: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        redirect: false,
        errorMsg: '',
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: '',
        redirect: true
      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        redirect: false,
        errorMsg: 'Authentication failed.'
      }
    default:
      return state;
  }
}