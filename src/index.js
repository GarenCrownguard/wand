import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
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
