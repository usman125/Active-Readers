import {
  GET_BOOK_STATS
} from "./types";
import TrakeApi from "../api/TrakeApi";

export const getBookStats = (userId) => {
  return (dispatch) => {
    TrakeApi.get('/booksstats/?userId=' + userId).then((result) => {
      console.log("BOOK STATS:--", result.data);
      if (result.data[0].status === 1) {
        let exchange = result.data[0].stats.exchange.length ? result.data[0].stats.exchange[0].exchange : 0;
        let total = result.data[0].stats.total.length ? result.data[0].stats.total[0].total : 0;
        let wishlist = result.data[0].stats.wishlist.length ? result.data[0].stats.wishlist[0].wishlist : 0;
        dispatch({
          type: GET_BOOK_STATS,
          payload: { exchange, total, wishlist }
        })
      }
    }).catch((err) => {
      console.log("BOOK STATS:--", err);
    })
  }
}