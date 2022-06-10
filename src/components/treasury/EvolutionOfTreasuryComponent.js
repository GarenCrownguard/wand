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
    ...theme.typography.cardBackground,
    marginRight:13,
    minHeight: 363,
    "@media (max-width: 450px)": {
      marginRight: 0,
    },
  },
  graphContainer: {
    marginTop: 18,
    height: 190.5,
    width: "100%",
  },
  graphSection: {
    width: "100%",
    minHeight: 363,
    padding: 33,
  },
  graphSubtitle: {
    ...theme.typography.boldamountvalue,
  },
  graphTitle: {
    ...theme.typography.smallgreytitle,
  },
}));

function EvolutionOfTreasuryComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Column
      flexGrow={1}
      className={classes.container}
      horizontal="center"
      breakpoints={{ 1024: "column" }}
    >
      {/* <Row wrap flexGrow={7} className={classes.graphSection}>
        <Row wrap horizontal="space-between">
          <Column>
            <span className={classes.graphTitle}>Your SCEPTER holdings</span>
            <span className={classes.graphSubtitle}>$23,450,00</span>
          </Column>
        </Row>
        <div className={classes.graphContainer}>
          <LineChart
            data={data}
            // viewBoxWidth={500}
            pointsStrokeColor={theme.color.lightBlue}
            areaColor={theme.color.lightBlue}
            areaVisible={true}
          />
        </div>
      </Row> */}
    </Column>
  );
}

export default EvolutionOfTreasuryComponent;
