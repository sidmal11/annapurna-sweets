//for creating middleware and STORE i.e. the big state object
import { createStore, applyMiddleware } from "redux";

//importing logger which will log before the middleware are fired and help in DEBUGGUING
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
