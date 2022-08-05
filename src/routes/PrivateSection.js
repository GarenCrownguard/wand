import React, { useState } from "react";
// import { createUseStyles } from "react-jss";

import {
  useDisclosure,
  Flex,
  useBreakpointValue,
  Button,
  Box,
} from "@chakra-ui/react";

import SideBar from "components/3components/SideBar";
import Header from "components/3components/Header";

// import { Column, Row } from "simple-flexbox";
// import { SidebarComponent, SidebarContext } from "components/sidebar";
// import HeaderComponent from "components/header/HeaderComponent";
// import PrivateRoutes from "./PrivateRoutes";

// Redux
import { connect } from "react-redux";

function PrivateSection() {
  // const classes = useStyles();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const variantSideBar = useBreakpointValue({
    base: { size: "base", variant: "drawer", burgerButton: true },
    md: { size: "md", variant: "sidebar", burgerButton: false },
  });
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  console.log(
    `[PrivateSection]: Size of the screen is: ${variantSideBar.size}`
  );

  return (
    <>
      <SideBar
        isOpen={isSidebarOpen}
        variant={variantSideBar.variant}
        onClose={toggleSidebar}
      />
      <Box w="100%" h="100vh" top={0} p="35px">
        <Header
          isMobile={variantSideBar.burgerButton}
          onBurgerButtonClick={toggleSidebar}
        />

        {variantSideBar.burgerButton && (
          <>
            <Button onClick={toggleSidebar} />
          </>
        )}
      </Box>
      {/* <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        bg="#091F2C"
      >
        {variantSideBar.burgerButton && (
          <>
            <Button onClick={toggleSidebar} />
          </>
        )}
      </Flex> */}
    </>
    // <SidebarContext>
    //   <Row className={classes.container}>
    //     <SidebarComponent />
    //     <Column flexGrow={1} className={classes.mainBlock}>
    //       <HeaderComponent />
    //       <div className={classes.contentBlock}>
    //         <PrivateRoutes />
    //       </div>
    //     </Column>
    //   </Row>
    // </SidebarContext>
  );
}

// https://stackoverflow.com/a/38678454
// https://stackoverflow.com/a/38205160
/*
Your component is only going to re-render if its state or props are changed. You are not relying on this.state or this.props, but rather fetching the state of the store directly within your render function.

The connect function generates a wrapper component that subscribes to the store. When an action is dispatched, the wrapper component's callback is notified and hence rerenders.
*/

// We can also use subscribe to checkout the change in store. But we are using connect so no need.

export default connect()(PrivateSection);
