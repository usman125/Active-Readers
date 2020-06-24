import {
  REGISTER_INPUT_CHANGED,
  SET_USER_LOCATION,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./types";
import TrakeApi from "../api/TrakeApi";

export const registerInputChanged = ({ prop, value }) => {
  console.log("RESGISERI INPUT");
  return {
    type: REGISTER_INPUT_CHANGED,
    payload: { prop, value }
  }
}

export const setUserLocation = (location) => {
  return {
    type: SET_USER_LOCATION,
    payload: location
  }
}

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER
    });
    TrakeApi.post('/auth/register', user).then((result) => {
      if (result.status === 200) {
        console.log("TRAKE API RESULT:--", result);
        dispatch({
          type: REGISTER_USER_SUCCESS
        });
      } else {
        dispatch({
          type: REGISTER_USER_FAILURE
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}