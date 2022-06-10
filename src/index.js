import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import Theme from "resources/theme";
import Routes from "routes";
import "./fonts.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// Store only has getState and setState. Hence its a pipeline structure. You can only set a state using the dispatch function
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
