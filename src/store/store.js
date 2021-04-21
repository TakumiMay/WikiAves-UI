// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { default as promiseMiddleware } from "redux-promise-middleware";
import { default as thunkMiddleware } from "redux-thunk";
import persistState from "redux-localstorage";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development",
});

const createStoreWithMiddleware = compose(
  persistState([]),
  applyMiddleware(thunkMiddleware, promiseMiddleware, loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer);
  return store;
}
