import React from "react";

import { UserScepterHoldingsComponent } from "components/useraccount";

import { Column, Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
    maincontainer: {
      "@media (max-width: 450px)": {
        maxHeight: 726,
      },
      "@media (min-width: 450px)": {
        maxHeight: 363,
      },
    },
  }));

function AccountComponent() {

    
  const classes = useStyles();

  return (
    <Column>
      <Row
        flexGrow={1}
        className={classes.maincontainer}
        breakpoints={{ 1080: "column" }}
      >
        <UserScepterHoldingsComponent />
        
      </Row>
    </Column>
  );
}

export default AccountComponent;
