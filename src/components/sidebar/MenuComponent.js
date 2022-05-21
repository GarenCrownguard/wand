import React, { useState } from "react";
import { useTheme } from "react-jss";
import { slide as Menu } from "react-burger-menu";

import { IconBurger } from "assets/icons";

const getMenuStyles = ({ theme }) => ({
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
    background: theme.color.grayishBlue3,
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
    fill: theme.color.veryDarkGrayishBlue,
  },
  bmOverlay: {
    background: "rgba(10, 34, 48, 0.98)",
    backdropFilter: "blur(20px)",
    zIndex: 20,
  },
});

function MenuComponent({ children, isMobile }) {
  const theme = useTheme();
  const menuStyles = getMenuStyles({ theme });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      isOpen={!isMobile || isOpen}
      noOverlay={!isMobile}
      disableCloseOnEsc
      styles={menuStyles}
      onStateChange={(state) => setIsOpen(state.isOpen)}
      customBurgerIcon={<IconBurger />}
    >
      {children}
    </Menu>
  );
}

export default MenuComponent;
