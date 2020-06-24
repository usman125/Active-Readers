import {
  INPUT_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SET_LOGGED_USER
} from "./types";
import TrakeApi from "../api/TrakeApi";

export const inputChanged = ({ prop, value }) => {
  return {
    type: INPUT_CHANGED,
    payload: { prop, value }
  }
}

export const loginUser = (params, ownProps) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER
    });
    TrakeApi.post('/auth/login', params).then((result) => {
      if (result.data.status === 200) {
        console.log("TRAKE API LOGIN RESULT:--", result, params, ownProps);
        dispatch({
          type: LOGIN_USER_SUCCESS
        });
        dispatch({
          type: SET_LOGGED_USER,
          payload: { user: result.data.response.user, authToken: result.data.response.token }
        });
        ownProps.history.push(`/home`);
      } else {
        dispatch({
          type: LOGIN_USER_FAILURE
        });
      }
    }).catch((err) => {
      dispatch({
        type: LOGIN_USER_FAILURE
      });
      console.log("TRAKE API LOGIN RESULT:--", err);
    });
  }
}