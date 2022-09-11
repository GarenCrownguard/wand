import React from "react";
import ReactDOM from "react-dom/client";
/* 
Why to use HashRouter: https://stackoverflow.com/a/36623117 
BrowserRouter does not work on the build.
*/
import { HashRouter as Router } from 'react-router-dom'
import PrivateSection from './routes/PrivateSection'
import "./fonts.css";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "./styles"
import { Provider } from "react-redux";
import store from "./redux/store";

// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={ChakraTheme}>
      <Provider store={store}>
        <Router>
          <PrivateSection />
        </Router>
      </Provider>
    </ChakraProvider>
);
