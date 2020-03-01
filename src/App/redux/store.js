import { applyMiddleware, createStore, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import reducers from "./reducers";

export default createStore(
  combineReducers(reducers),
  applyMiddleware(promise)
);
