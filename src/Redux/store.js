import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
