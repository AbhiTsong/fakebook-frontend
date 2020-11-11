import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import RootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };
