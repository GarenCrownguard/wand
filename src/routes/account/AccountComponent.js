import React from "react";

import { UserScepterHoldingsComponent } from "components/useraccount";

import { Column, Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";

import AtomicText from "components/atomicComponents/atomicText";
import Button from "components/atomicComponents/atomicButton";
import theme from "resources/theme";
import {
  prettifyGrowthPercentage,
  prettifyamounts,
  prettifytolocalstring,
} from "resources/utilities";

import AtomicCard from "components/atomicComponents/atomicCard";
import StatsCardComponent from "components/cards/StatsCardComponent";
import AtomicSeperator from "components/atomicComponents/atomicSeperator";

const useStyles = createUseStyles(() => ({
  maincontainer: {
    "@media (max-width: 450px)": {
      maxHeight: 726,
    },
    "@media (min-width: 450px)": {
      maxHeight: 363,
    },
  },
  miniCardContainer: {
    flexGrow: 1,
    "@media (max-width: 450px)": {
      maxWidth: "none",
      minWidth: 200,
    },
  },
}));

function AccountComponent() {
  const classes = useStyles();

  return (
    <Column>
      aaa
      <AtomicText text="bbbbb" size="29" color={theme.color.grey} />
      <AtomicText text="bbbbb" />
      <AtomicText
        text={prettifyGrowthPercentage("positive", 22)}
        size="29"
        color={theme.color.red}
      />
      <AtomicCard padding="13">
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Circulating Supply (total $SCEPTER)"
          value={prettifytolocalstring(200000000)}
        />
        <AtomicSeperator vertical length="33" />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="$SCEPTER Price"
          value={prettifyamounts(30)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Aidrops distributed (last 3 months)"
          value={prettifyamounts(900000000)}
        />
      </AtomicCard>
      <AtomicCard>
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Circulating Supply (total $SCEPTER)"
          value={prettifytolocalstring(200000000)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="$SCEPTER Price"
          value={prettifyamounts(30)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Aidrops distributed (last 3 months)"
          value={prettifyamounts(900000000)}
        />
      </AtomicCard>
      <Button
        label={"7qqqq"}
        value={"7aaa"}
        bkgColor={"#000000"}
        color="#fff"
        isOp={false}
      />
      <AtomicCard minHeight="363">
        {/* <UserScepterHoldingsComponent /> */}
        <AtomicSeperator vertical length="200" margin="16 16 16 16" />
        <AtomicSeperator horizontal length="200" margin="16 16 16 16" />
      </AtomicCard>
    </Column>
  );
}

export default AccountComponent;
