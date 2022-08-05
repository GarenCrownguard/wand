import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateSection from './routes/PrivateSection'
import "./fonts.css";
import "./index.css";

import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';
import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "./styles"
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// Store only has getState and setState. Hence its a pipeline structure. You can only set a state using the dispatch function
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <ThemeProvider theme={Theme}>
    <ChakraProvider theme={ChakraTheme}>
      <Provider store={store}>
        <Router>
          <PrivateSection />
        </Router>
      </Provider>
    </ChakraProvider>
  // </ThemeProvider>
);
