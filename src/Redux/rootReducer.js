import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// All Reducers Import
import { authReducer } from "./Auth/AuthReducer";
import { ModalReducer } from "./Modal/ModalReducer";
import { postReducer } from "./Post/post.reducer";
import { warningReducer } from "./Warning/Warning.Reducer";
import {userReducer} from "./User/UserReducer"

const persitConfig = {
  key: "root",
  storage,
  whitelist: ["auth", ""],
};

const postPersistConfig = {
  key: "post",
  storage,
  blacklist: ["allPosts"],
};

const RootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  modal: ModalReducer,
  post: persistReducer(postPersistConfig, postReducer),
  warning: warningReducer,
});

export default persistReducer(persitConfig, RootReducer);
