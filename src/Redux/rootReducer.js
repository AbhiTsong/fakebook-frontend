import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// All Reducers Import
import { authReducer } from "./Auth/AuthReducer";
import { ModalReducer } from "./Modal/ModalReducer";
import { postReducer } from "./Post/post.reducer";
import { warningReducer } from "./Warning/Warning.Reducer";
import { userReducer } from "./User/UserReducer";
import { friendsReducer } from "./Friends/friendsReducer";
import { tosterReducer } from "./toster/toster.reducer";

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

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["token"],
};

const RootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  modal: ModalReducer,
  friends: friendsReducer,
  post: persistReducer(postPersistConfig, postReducer),
  warning: warningReducer,
  tost: tosterReducer,
});

export default persistReducer(persitConfig, RootReducer);
