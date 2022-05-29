import React from "react";

import OverviewBarComponent from "components/overview";

import { Column, Row } from "simple-flexbox";
import StatsCardComponent from "components/cards/StatsCardComponent";

import { prettifyamounts } from 'resources/utilities';

import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  title:{
      ...theme.typography.title,
  }
});

const DashboardComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.mainContainer}>
      <OverviewBarComponent />
      <h2 className={classes.title}>Account Overview</h2>
      <Row className={classes.overviewBar}>aa</Row>
    </div>
  );
};

export default DashboardComponent;
