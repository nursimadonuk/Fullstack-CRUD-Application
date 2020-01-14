// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Individual reducers altogether under an alias;
import { rootReducer } from "../reducers";

// Root epic;
// import rootEpic from "../epics";

// Construct our Redux store;
const reducer = combineReducers(rootReducer);
const logger = createLogger({ collapsed: true });
// const epicMiddleware = createEpicMiddleware();
// const middleware = composeWithDevTools(applyMiddleware(epicMiddleware, logger));
export default createStore(reducer, applyMiddleware(thunkMiddleware));

// epicMiddleware.run(rootEpic);
