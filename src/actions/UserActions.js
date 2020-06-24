import {
  GET_ACTIVE_USERS_LIST,
  CLEAR_USERS_LIST
} from "./types";
import TrakeApi from "../api/TrakeApi";
import * as _ from 'lodash';

export const getUsersList = (userId) => {
  return (dispatch) => {
    // TrakeApi.get('/allusers/?userId=' + userId).then(
    //   result => {
    //     if (result.data[0].status === 1) {
    //       console.log("RESULT ALL USERS:--", result.data[0].users);
    //       // let usersArray = [];
    //       result.data[0].users.forEach((c) => {
    //         TrakeApi.get('/userbookstats/?userId=' + c._id).then(
    //           result => {
    //             console.log("USER BOOK STATS:--", result, c.email);
    //             let exchange = result.data[0].stats[0].exchange.length ? result.data[0].stats[0].exchange[0].exchange : 0;
    //             let total = result.data[0].stats[0].total.length ? result.data[0].stats[0].total[0].total : 0;
    //             let wishlist = result.data[0].stats[0].wishlist.length ? result.data[0].stats[0].wishlist[0].wishlist : 0;
    //             var object = {
    //               exchange: exchange,
    //               total: total,
    //               wishlist: wishlist,
    //             }
    //             c.bookStats = object;
    //             dispatch({
    //               type: GET_ACTIVE_USERS_LIST,
    //               payload: c
    //             })
    //           }
    //         ).catch(
    //           error => {
    //             console.log("ERROR ALL USERS:--", error);
    //           }
    //         )
    //       });
    //     } else {

    //     }
    //   }
    // ).catch(
    //   error => {
    //     console.log("ERROR ALL USERS:--", error);
    //   }
    // );
    TrakeApi.get('/alluserswithstats/?userId=' + userId).then(
      result => {
        if (result.data[0].status === 1) {
          let usersArray = _.toArray(
            _.mapValues(result.data[0].users, function (user) {
              return {
                ...user,
                _id: user._id._Id,
                name: user._id.name,
                email: user._id.email,
                location: user._id.location,
              }
            })
          );
          console.log("RESULT ALL USERS:--", result.data[0].users, usersArray);
          dispatch({
            type: GET_ACTIVE_USERS_LIST,
            payload: usersArray
          });
        } else {

        }
      }
    ).catch(
      error => {
        console.log("ERROR ALL USERS:--", error);
      }
    );
  }
}

export const clearUserList = () => {
  return {
    type: CLEAR_USERS_LIST
  }
}