import React from "react";
import { Column, Row } from "simple-flexbox";

import SidebarComponent from "./components/SidebarComponent";
import HeaderComponent from "./components/Header/Header";
import Wallet from './components/wallet/wallet';
import Footer from "./components/Footer/Footer";
// import PrivateRoutes from "./routes/PrivateRoutes";

import './app.scss'
import './fonts.css'

function App() {

  return (
    <>
      <Row className='main_container'>
        <SidebarComponent />
        <Column flexGrow={1} className="mainblock-container">
          {/* <HeaderComponent /> */}
          <Wallet />
          <div className="contentcomponent-container">
            {/* <PrivateRoutes /> */}
          </div>
        </Column>
      </Row>
      {/* <Footer /> */}
    </>
  );
}

export default App;
