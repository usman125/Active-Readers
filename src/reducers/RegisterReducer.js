import {
  REGISTER_INPUT_CHANGED,
  SET_USER_LOCATION,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  name: '',
  email: '',
  password: '',
  dob: '',
  contact: '',
  avatar: '',
  location: {
    latitude: '',
    longitude: ''
  },
  errMsg: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_INPUT_CHANGED:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
        errMsg: '',
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        errMsg: 'Registration Successfull.',
      }
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errMsg: 'Registration failed.'
      }
    case SET_USER_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
}