import React from "react";
import { Column, Row } from "simple-flexbox";
import LineChart from "react-svg-line-chart";

import { createUseStyles, useTheme } from "react-jss";

const data = [];

for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

// const data = [{x:1,y:12},{x:2,y:22},{x:3,y:112},{x:4,y:2},{x:5,y:312},{x:6,y:12}];

const useStyles = createUseStyles((theme) => ({
  container: {
    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    minHeight: 363,
    "@media (max-width: 1080px)": {
      marginTop: 20,
    },
    "@media (min-width: 1080px)": {
      marginTop: 0,
      maxWidth: 356,
    },
  },
  graphContainer: {
    marginTop: 24,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  graphSection: {
    padding: 24,
  },
  graphSubtitle: {
    ...theme.typography.smallSubtitle,
    color: theme.color.grayishBlue2,
    marginTop: 4,
    marginRight: 8,
  },
  graphTitle: {
    ...theme.typography.smallgreytitle,
  },
}));

function TotalValueDepositComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Column
      flexGrow={1}
      className={classes.container}
      horizontal="center"
      breakpoints={{ 390: "column" }}
    >
      {/* <Column
        wrap
        flexGrow={7}
        flexBasis="735px"
        className={classes.graphSection}
        breakpoints={{
          390: { width: "calc(100% - 48px)", flexBasis: "auto" },
        }}
      >
        <Row wrap horizontal="space-between">
          <Column>
            <span className={classes.graphTitle}>Today’s trends</span>
            <span className={classes.graphSubtitle}>
              as of 25 May 2019, 09:41 PM
            </span>
          </Column>
        </Row>
        <div className={classes.graphContainer}>
          <LineChart
            data={data}
            viewBoxWidth={500}
            pointsStrokeColor={theme.color.lightBlue}
            areaColor={theme.color.lightBlue}
            areaVisible={true}
          />
        </div>
      </Column> */}
    </Column>
  );
}

export default TotalValueDepositComponent;
