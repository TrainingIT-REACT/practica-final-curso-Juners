import { applyMiddleware, createStore, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import songs from "./reducers/songs";
import player from "./reducers/player";
import albumsList from "./reducers/albumsList";
import album from "./reducers/album";

export default createStore(
  combineReducers({ songs, player, albumsList, album }),
  applyMiddleware(promise)
);
