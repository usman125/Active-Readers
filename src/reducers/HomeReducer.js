import {
  GET_BOOK_STATS
} from "../actions/types";

const INITIAL_STATE = {
  bookStats: {}
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOK_STATS:
      return {
        ...state,
        bookStats: {
          ...state.bookStats,
          exchange: action.payload.exchange,
          wishlist: action.payload.wishlist,
          total: action.payload.total,
        }
      }
    default:
      return state;
  }
}