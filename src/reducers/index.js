import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedInReducer from "./auth";

const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: loggedInReducer
});

export default allReducers;
