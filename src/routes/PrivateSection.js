import React from "react";
import { createUseStyles } from "react-jss";
import { Column, Row } from "simple-flexbox";
import { SidebarComponent, SidebarContext } from "components/sidebar";
import HeaderComponent from "components/header/HeaderComponent";
import PrivateRoutes from "./PrivateRoutes";

// Redux
import { connect } from 'react-redux';

const useStyles = createUseStyles({
  container: {
    height: "100vh",
    minHeight: 850,
  },
  mainBlock: {
    marginLeft: 255,
    padding: 30,
    "@media (max-width: 450px)": {
      marginLeft: 0,
    },
  },
  contentBlock: {
    marginTop: 54,
    height: 'auto',
  },
});

function PrivateSection() {
  
  const classes = useStyles();

  return (
    <SidebarContext>
      <Row className={classes.container}>
        <SidebarComponent />
        <Column flexGrow={1} className={classes.mainBlock}>
          <HeaderComponent />
          <div className={classes.contentBlock}>
            <PrivateRoutes />
          </div>
        </Column>
      </Row>
    </SidebarContext>
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
