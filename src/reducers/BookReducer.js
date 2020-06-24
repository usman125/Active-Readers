import {
  ADD_TO_BOOK_LIST,
  GET_BOOK_LIST,
  GET_BOOK_LIST_SUCCESS,
  GET_BOOK_LIST_FAILURE,
  TOGGLE_BOOK_EXCHANGE,
  TOGGLE_BOOK_COMPLETED,
  TOGGLE_BOOK_READING,
  TOGGLE_BOOK_WISHLIST
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  books: [],
  booksIds: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOK_LIST:
      let bookIds = [];
      for (let i = 0; i < action.payload.length; i++) {
        bookIds.push(action.payload[i]._id);
      }
      return {
        ...state,
        books: action.payload,
        booksIds: bookIds
      }
    case GET_BOOK_LIST_SUCCESS:
      return {
        ...state,
        loading: true,
      }
    case GET_BOOK_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case ADD_TO_BOOK_LIST:
      let newBooks = state.books.slice();
      let newBooksIds = state.booksIds.slice();
      newBooks.push(action.payload.book);
      newBooksIds.push(action.payload.bookId);
      return {
        ...state,
        books: newBooks,
        booksIds: newBooksIds
      }
    case TOGGLE_BOOK_EXCHANGE:
      return {
        ...state,
        books: state.books.map((c) => {
          if (action.payload._id === c._id) {
            return {
              ...c,
              exchange: !c.exchange
            }
          }
          return c;
        })
      };
    case TOGGLE_BOOK_COMPLETED:
      return {
        ...state,
        books: state.books.map((c) => {
          if (action.payload._id === c._id) {
            return {
              ...c,
              completed: !c.completed,
              reading: !c.reading,
            }
          }
          return c;
        })
      };
    case TOGGLE_BOOK_READING:
      return {
        ...state,
        books: state.books.map((c) => {
          if (action.payload._id === c._id) {
            return {
              ...c,
              completed: !c.completed,
              reading: !c.reading
            }
          }
          return c;
        })
      };
    case TOGGLE_BOOK_WISHLIST:
      return {
        ...state,
        books: state.books.map((c) => {
          if (action.payload._id === c._id) {
            return {
              ...c,
              wishlist: !c.wishlist
            }
          }
          return c;
        })
      };
    default:
      return state;
  }
}