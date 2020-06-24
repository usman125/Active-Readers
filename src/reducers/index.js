import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import BookReducer from "./BookReducer";
import AddBookFormReducer from "./AddBookFormReducer";
import HomeReducer from "./HomeReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  login: LoginReducer,
  booksGallery: BookReducer,
  addBookForm: AddBookFormReducer,
  home: HomeReducer,
  users: UserReducer,
});