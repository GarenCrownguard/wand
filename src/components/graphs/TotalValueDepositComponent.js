import React from "react";
import { Column } from "simple-flexbox";
// import LineChart from "react-svg-line-chart";

import { createUseStyles } from "react-jss";

const data = [];

for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

// const data = [{x:1,y:12},{x:2,y:22},{x:3,y:112},{x:4,y:2},{x:5,y:312},{x:6,y:12}];

const useStyles = createUseStyles((theme) => ({
  container: {
    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 5,
    marginRight:0,
    marginBottom: 17,
    minHeight: 363,
    "@media (max-width: 450px)": {
      // marginTop: 20,
    },
    "@media (min-width: 450px)": {
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
}));

function TotalValueDepositComponent() {
  
  const classes = useStyles();

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
            pointsStrokeColor={lightBlue}
            areaColor={lightBlue}
            areaVisible={true}
          />
        </div>
      </Column> */}
    </Column>
  );
}

export default TotalValueDepositComponent;
