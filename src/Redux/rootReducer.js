import { combineReducers } from "redux";
import { authReducer } from "./Auth/AuthReducer";
import { ModalReducer } from "./Modal/ModalReducer";
import { postReducer } from "./Post/post.reducer"

const RootReducer = combineReducers({
  user: authReducer,
  modal: ModalReducer,
  post: postReducer
});

export default RootReducer;
