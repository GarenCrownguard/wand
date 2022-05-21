import React from "react";

import LogoComponent from "./LogoComponent";
import MenuitemComponent from "./MenuitemComponent";

import "./index.scss";

function SidebarComponent() {
  return (
    <div className="SidebarComponent-container">
      <div className="LogoComponent-container">
        <LogoComponent />
      </div>
      <div className="MenuitemComponent-container">
        <MenuitemComponent />
      </div>
    </div>
  );
}

export default SidebarComponent;
