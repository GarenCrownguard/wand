import React from "react";
import ReactDOM from "react-dom";
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";

import "./index.scss";
import "./fonts.css";

ReactDOM.render(
  <Router>
    <App />
    {/* <Routes /> */}
  </Router>,
  document.getElementById("root")
);
