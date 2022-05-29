import React from "react";

import { UserScepterHoldingsComponent } from "components/useraccount";
import SwapCardComponent from "components/cards/SwapCardComponent";

import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme) => ({
    maincontainer: {
      "@media (max-width: 1080px)": {
        maxHeight: 726,
      },
      "@media (min-width: 1080px)": {
        maxHeight: 363,
      },
    },
  }));

function AccountComponent() {

    const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Column>
      <Row
        flexGrow={1}
        className={classes.maincontainer}
        breakpoints={{ 1080: "column" }}
      >
        <UserScepterHoldingsComponent />
        <SwapCardComponent />
      </Row>
    </Column>
  );
}

export default AccountComponent;
