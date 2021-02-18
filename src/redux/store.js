//for creating middleware and STORE i.e. the big state object
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

//importing logger which will log before the middleware are fired and help in DEBUGGUING
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
