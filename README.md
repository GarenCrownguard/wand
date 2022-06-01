# wand

FrontEnd for Wand Investments project.

# Database

### <|> Transaction List

cluster: wand-investments-cluster  
database: wand-database  
collection: investment-list

Example:

```json
{
  "date": "31/05/2022",
  "protocol_name": "Anchor",
  "protocol_url": "https://app.anchorprotocol.com/",
  "invested_amount": 1000000,
  "expected_apy": 20,
  "transaction_link": "https://finder.terra.money/classic/tx/AC53B6A60009CE3AAFE147505C4235F5A1BC6EC5C56A7EF59D3C21839C3E25C3",
  "chain": "terra"
}
```

Structure:

| Field           | Type   | Description                               | Example                      |
| --------------- | ------ | ----------------------------------------- | ---------------------------- |
| date            | String | Date of investment                        | 31/05/2022                   |
| protocolName    | String | Name of protocol/ project                 | Anchor/ Tarot                |
| chain           | String | The blockchain of the investment protocol | BSC/ AVAX/ FTM               |
| protocolUrl     | String | The website of the investment protocol    | https://app.beefy.finance/#/ |
| investedAmount  | Double | The dollar amount invested                | 500000/ 1000000              |
| expectedAPY     | Double | The expected APY from the investment      | 20/ 0.5                      |
| transactionLink | String | The transaction hash of the investment    | https://bscscan.com/tx/xxxx  |

### <|> Stats

cluster: wand-investments-cluster  
database: wand-database  
collection: front-end-stats

Example:

```json
{
  "timestamp": 1653991989,
  "growthFactor": 20.0,
  "sellFactor": 15.23,
  "airdropsDistributed3Months": 5000000.0,
  "scepter": {
    "backingPrice": 100.0,
    "treasuryBalance": 50000.0,
    "circulatingSupply": 500.0,
    "allocations": {
      "USDT": 10000.0,
      "USDC": 30000.0,
      "UST": 10000.0
      }
  },
  "baton": {
    "backingPrice": 10.0,
    "redeemingPrice": 3.0,
    "treasuryBalance": 100000.0,
    "circulatingSupply": 100000.0,
    "allocations": {
      "USDT": 20000.0,
      "USDC": 60000.0,
      "UST": 20000.0
      }
  },
  "riskTreasury": {
    "balance": 500000.0,
    "allocations": {
      "USDT": 100000.0,
      "USDC": 300000.0,
      "UST": 100000.0
      }
  }
}
```

Structure:

| Field                      	| Type      	| Description                                       	| Example    	|
|----------------------------	|-----------	|---------------------------------------------------	|------------	|
| timestamp                  	| Timestamp 	| Timestamp of investment                           	| 1653991989 	|
| growthFactor               	| Double    	| The current growth factor of the project.         	| 12         	|
| sellFactor                 	| Double    	| The current sell factor of the project.           	| 25         	|
| airdropsDistributed3Months 	| Double    	| Total amount of airdrops distributed in USD.      	| 200000     	|
| backingPrice               	| Double    	| The backing price of the token.                   	| 100        	|
| treasuryBalance            	| Double    	| The treasury balance of a particular token.       	| 2000000    	|
| circulatingSupply          	| Double    	| Current circulating supply of a particular token. 	| 10000      	|
| redeemingPrice             	| Double    	| The redeeming price of BATON                      	| 50         	|
| USDT                       	| Double    	| Number of USDT token in treasury.                 	| 10000000   	|
| USDC                       	| Double    	| Number of USDC token in treasury.                 	| 10000000   	|
| UST                        	| Double    	| Number of UST token in treasury.                  	| 10000000   	|

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
