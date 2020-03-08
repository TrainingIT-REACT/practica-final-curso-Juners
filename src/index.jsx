import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./App/redux/store";
import "./vendor/foundation.min.css";
import "./vendor/reset.css";

ReactDOM.render(
  <Provider store={store}>
    <div id="app" className="grid-container full">
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

let worker;
let refreshing = false;
document.getElementById('reload').addEventListener('click', () => {
  worker.postMessage({ action: 'skipWaiting' });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        window.location.reload();
        refreshing = true;
      }
    });
  });
}