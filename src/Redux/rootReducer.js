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
import { themeReducer } from "./theme/theme.reducer";
import { messageReducer } from "./Message/Message.reducer";
import { notificationReducer } from "./Notification/Notification.reducer";
import { settingsReducer } from "./ShowSettings/ShowSettings.reducer";

const persitConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme"],
};

const RootReducer = combineReducers({
  auth: authReducer,
  friends: friendsReducer,
  message: messageReducer,
  modal: ModalReducer,
  notification: notificationReducer,
  post: postReducer,
  settings: settingsReducer,
  theme: themeReducer,
  tost: tosterReducer,
  user: userReducer,
  warning: warningReducer,
});

export default persistReducer(persitConfig, RootReducer);
