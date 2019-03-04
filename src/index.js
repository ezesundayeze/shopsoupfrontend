import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const store = createStore(reducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
