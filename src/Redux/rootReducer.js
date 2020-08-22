import { combineReducers } from "redux";
import { authReducer } from "./Auth/AuthReducer";
import { ModalReducer } from "./Modal/ModalReducer";

const RootReducer = combineReducers({
  user: authReducer,
  modal: ModalReducer,
});

export default RootReducer;
