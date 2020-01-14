// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Individual reducers altogether under an alias;
import * as reducers from "../reducers/index";

// Root epic;
// import rootEpic from "../epics";

// Construct our Redux store;
const reducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);
const store = createStore(reducer, middleware);

// export Redux Store here so that we can pass it to the Provider wrapper;
export default store;
