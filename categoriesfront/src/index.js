import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/rootReducer";
import * as serviceWorker from "./serviceWorker";

const store = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={store(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
