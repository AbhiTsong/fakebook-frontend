import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
