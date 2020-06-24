import {
  GET_ACTIVE_USERS_LIST,
  CLEAR_USERS_LIST
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  usersIds: [],
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACTIVE_USERS_LIST:
      let userIds = [];
      for (let i = 0; i < action.payload.length; i++) {
        userIds.push(action.payload[i]._id);
      }
      return {
        ...state,
        users: action.payload,
        usersIds: userIds
      }
    case CLEAR_USERS_LIST:
      return {
        ...state,
        ...INITIAL_STATE
      }
    // case GET_ACTIVE_USERS_LIST:
    //   if (state.usersIds.indexOf(action.payload._id) < 0) {
    //     let userId = state.usersIds.slice();
    //     userId.push(action.payload._id);
    //     let usersArray = state.users.slice();
    //     usersArray.push(action.payload);
    //     return {
    //       ...state,
    //       users: usersArray,
    //       usersIds: userId
    //     }
    //   }
    default:
      return state;
  }
}