# wand
FrontEnd for Wand Investments project.


# Database

### Transaction List
cluster: wand-investments-cluster  
database: wand-database  
collection: investment-list  

Structure:  

| Field            | Type   | Description                               | Example                                                                                   |
|------------------|--------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| date             | String | Date of investment                        | 31/05/2022                                                                                |
| protocol_name    | String | Name of protocol/ project                 | Anchor/ Tarot                                                                             |
| chain            | String | The blockchain of the investment protocol | BSC/ AVAX/ FTM                                                                            |
| protocol_url     | String | The website of the investment protocol    | https://app.beefy.finance/#/                                                              |
| invested_amount  | String | The dollar amount invested                | 500000/ 1000000                                                                           |
| expected_apy     | String | The expected APY from the investment      | 20/ 0.5                                                                                   |
| transaction_link | String | The transaction hash of the investment    | https://bscscan.com/tx/0x919fafa94a776356d7be9116e0d18f8777209cc3be7d1d2a7eaed897f7160e4f |



<!-- Deploying react app to github -->
https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb#:~:text=When%20you've%20successfully%20deployed,is%20hosted%20on%20GitHub%20Pages.

# Garen Fork: https://github.com/llorentegerman/react-admin-dashboard

Reference @
1. https://dev.to/llorentegerman/building-a-ui-from-scratch-responsive-sidebar-and-header-443g
2. https://dev.to/llorentegerman/building-a-ui-from-scratch-based-on-a-design-with-reactjs-3l1e
3. https://dev.to/llorentegerman/building-a-ui-from-scratch-responsive-sidebar-and-header-443g
4. https://dev.to/llorentegerman/building-a-ui-from-scratch-responsive-content-6b9



import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    position: "absolute",
    // width: "98vw",
    height: "484px",
    left: "0px",
  },
});

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });


