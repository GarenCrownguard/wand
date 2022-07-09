import React, { useState } from "react";
import { useTheme } from "react-jss";
import { slide as Menu } from "react-burger-menu";

import { iconBurger } from "assets/icons";

const getMenuStyles = () => ({
  bmBurgerButton: {
    position: "absolute",
    width: 26,
    height: 20,
    left: 19,
    top: 40,
    zIndex: 19,
  },
  bmBurgerBars: {
    // background: "green",
  },
  bmBurgerBarsHover: {
    // background: "yellow",
  },
  bmCrossButton: {
    display: "none",
  },
  bmCross: {
    background: '#A4A6B3',
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: 255,
    zIndex: 30,
  },
  bmMenu: {
    background:
      "linear-gradient(126.6deg, rgba(6, 20, 29, 0.736) 28.69%, rgba(6, 20, 29, 0.8) 100%)",
    opacity: 0.98,
    boxShadow: "20px 0px 250px 10px rgba(234, 58, 246, 0.4)",
    backdropFilter: "blur(140px)",
  },
  bmItem: {
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
  bmMorphShape: {
    fill: '#A4A6B3',
  },
  bmOverlay: {
    background: "rgba(10, 34, 48, 0.98)",
    backdropFilter: "blur(20px)",
    zIndex: 20,
  },
});

function MenuComponent({ children, isMobile }) {
  
  const menuStyles = getMenuStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      isOpen={!isMobile || isOpen}
      noOverlay={!isMobile}
      disableCloseOnEsc
      styles={menuStyles}
      onStateChange={(state) => setIsOpen(state.isOpen)}
      customBurgericon={<iconBurger />}
    >
      {children}
    </Menu>
  );
}

export default MenuComponent;
