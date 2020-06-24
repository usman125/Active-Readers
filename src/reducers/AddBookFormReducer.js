import {
  ADD_BOOK_INPUT_CHANGED,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  ADD_BOOK_TOGGLE_WISH_LIST
} from "../actions/types";

const INITIAL_STATE = {
  errorMsg: '',
  loading: false,
  name: '',
  author: '',
  publish: '',
  wishlist: false,
  reading: false,
  exchange: false,
  completed: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOOK_INPUT_CHANGED:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case ADD_BOOK:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      }
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    case ADD_BOOK_TOGGLE_WISH_LIST:
      return {
        ...state,
        wishlist: !state.wishlist
      }
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: 'Infomation Missing.'
      }
    default:
      return state;
  }
}