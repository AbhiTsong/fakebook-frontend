import { combineReducers } from "redux";
import { signInReducer } from "./SignIn/SignInReducer";

const RootReducer = combineReducers({
  user: signInReducer,
});

export default RootReducer;
