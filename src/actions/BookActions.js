import {
  ADD_BOOK_INPUT_CHANGED,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_TO_BOOK_LIST,
  GET_BOOK_LIST,
  GET_BOOK_LIST_FAILURE,
  GET_BOOK_LIST_SUCCESS,
  TOGGLE_BOOK_EXCHANGE,
  TOGGLE_BOOK_READING,
  TOGGLE_BOOK_COMPLETED,
  ADD_BOOK_TOGGLE_WISH_LIST,
  TOGGLE_BOOK_WISHLIST
} from "./types";
import TrakeApi from "../api/TrakeApi";

export const addBookInputChanged = ({ prop, value }) => {
  return {
    type: ADD_BOOK_INPUT_CHANGED,
    payload: { prop, value }
  }
}

export const addBookFailure = () => {
  return {
    type: ADD_BOOK_FAILURE,
  }
}

export const addBookWishlistChange = () => {
  return {
    type: ADD_BOOK_TOGGLE_WISH_LIST,
  }
}

export const addBookLoader = () => {
  return {
    type: ADD_BOOK,
  }
}

export const toggleExchange = (book) => {
  // return {
  //   type: TOGGLE_BOOK_EXCHANGE,
  //   payload: book
  // }
  return (dispatch) => {
    TrakeApi.post('/toggle/exchange', book).then((result) => {
      if (result.data[0].status === 1) {
        console.log("WISH LIST RESULT:--", result);
        dispatch({
          type: TOGGLE_BOOK_EXCHANGE,
          payload: book
        })
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE,
        //   });
      } else {
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE
        //   });
      }
    }).catch((err) => {
      console.log("TRAKE API ADD BOOK RESULT:--", err);
      // dispatch({
      //   type: GET_BOOK_LIST_FAILURE
      // });
    });
  }
}

export const toggleCompleted = (book) => {
  // return {
  //   type: TOGGLE_BOOK_COMPLETED,
  //   payload: book
  // }
  return (dispatch) => {
    TrakeApi.post('/toggle/completed', book).then((result) => {
      if (result.data[0].status === 1) {
        console.log("WISH LIST RESULT:--", result);
        dispatch({
          type: TOGGLE_BOOK_COMPLETED,
          payload: book
        })
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE,
        //   });
      } else {
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE
        //   });
      }
    }).catch((err) => {
      console.log("TRAKE API ADD BOOK RESULT:--", err);
      // dispatch({
      //   type: GET_BOOK_LIST_FAILURE
      // });
    });
  }
}

export const toggleReading = (book) => {
  // return {
  //   type: TOGGLE_BOOK_READING,
  //   payload: book
  // }
  return (dispatch) => {
    TrakeApi.post('/toggle/reading', book).then((result) => {
      if (result.data[0].status === 1) {
        console.log("WISH LIST RESULT:--", result);
        dispatch({
          type: TOGGLE_BOOK_COMPLETED,
          payload: book
        })
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE,
        //   });
      } else {
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE
        //   });
      }
    }).catch((err) => {
      console.log("TRAKE API ADD BOOK RESULT:--", err);
      // dispatch({
      //   type: GET_BOOK_LIST_FAILURE
      // });
    });
  }
}

export const toggleWishlist = (book) => {
  // return {
  //   type: TOGGLE_BOOK_WISHLIST,
  //   payload: book
  // }
  return (dispatch) => {
    TrakeApi.post('/toggle/wishlist', book).then((result) => {
      if (result.data[0].status === 1) {
        console.log("WISH LIST RESULT:--", result);
        dispatch({
          type: TOGGLE_BOOK_WISHLIST,
          payload: book
        })
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE,
        //   });
      } else {
        //   dispatch({
        //     type: GET_BOOK_LIST_FAILURE
        //   });
      }
    }).catch((err) => {
      console.log("TRAKE API ADD BOOK RESULT:--", err);
      // dispatch({
      //   type: GET_BOOK_LIST_FAILURE
      // });
    });
  }
}

export const getBookList = (userId) => {
  return (dispatch) => {
    dispatch({
      type: GET_BOOK_LIST_SUCCESS,
    });
    TrakeApi.get('/allbooks/?userId=' + userId).then((result) => {
      if (result.data[0].status === 1) {
        // console.log("TRAKE API ADD BOOK RESULT:--", result);
        dispatch({
          type: GET_BOOK_LIST,
          payload: result.data[0].books
        });
        dispatch({
          type: GET_BOOK_LIST_FAILURE,
        });
      } else {
        dispatch({
          type: GET_BOOK_LIST_FAILURE
        });
      }
    }).catch((err) => {
      console.log("TRAKE API ADD BOOK RESULT:--", err);
      dispatch({
        type: GET_BOOK_LIST_FAILURE
      });
    });
  }
}

export const addBook = (params) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BOOK
    });
    TrakeApi.post('/addbook', params).then((result) => {
      if (result.data[0].status === 1) {
        // console.log("TRAKE API ADD BOOK RESULT:--", result, params);
        dispatch({
          type: ADD_BOOK_SUCCESS
        });
        dispatch({
          type: ADD_TO_BOOK_LIST,
          payload: { book: result.data[0].result, bookId: result.data[0].result._id }
        });
      } else {
        dispatch({
          type: ADD_BOOK_FAILURE
        });
      }
    }).catch((err) => {
      dispatch({
        type: ADD_BOOK_FAILURE
      });
      console.log("TRAKE API ADD BOOK RESULT:--", err);
    });
  }
}