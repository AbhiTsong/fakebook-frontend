import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const actionSanitizer = (action) =>
  action.type === "FETCH_POST_SUCCESS" && action.data
    ? { ...action, data: "<<LONG_BLOB>>" }
    : action;

const store = createStore(
  RootReducer,
  composeWithDevTools(actionSanitizer, applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
