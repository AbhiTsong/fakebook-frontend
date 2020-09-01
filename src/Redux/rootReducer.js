import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// All Reducers Import
import { authReducer } from "./Auth/AuthReducer";
import { ModalReducer } from "./Modal/ModalReducer";
import { postReducer } from "./Post/post.reducer";

const persitConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const RootReducer = combineReducers({
  user: authReducer,
  modal: ModalReducer,
  post: postReducer,
});

export default persistReducer(persitConfig, RootReducer);
