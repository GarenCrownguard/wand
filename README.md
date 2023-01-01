# wand

FrontEnd for Wand Investments project.
By Garen Crowngaurd

git config --global user.name "Garen Crowngaurd"

git config --global user.email "0xgaren@protonmail.com"

# Release ChangeLog

## Version 6 - 31.12.2022 - TBD
1. Replacing the WAND logo by the SpaceFUND logo -> merged the header and sidebar logo into one.
2. Changing the chart on the Dashboard -> different backingPrice on the graph and overview. Y-axis fix. Donut size fix.
3. Remove Bridge and Lending and add Bots instead, to link towards SpaceBOTS.
4. Wallet error handling when opening the dapp without a wallet.

## Version 5 - 13.10.2022
1. Removed BATONAirdrops post API call and endpoint.
2. Twitter link updated.
3. SPTR Graph Y axis updated to fix the new values.
4. Airdrop values updated from BE.
5. Warning added for cashout SPTR
6. Stats are populated with the last data in db if no wallet connected.

## Version 4 - 26.09.2022
1. SPTR Backing price graph Y axis fixed to show better upward trend.
2. The donut chart size has been fixed to stop it from overflowing.
3. Voting link has been added.

## Version 3 - 17.09.2022
The following updates have been made:
1. ```Invalid bigNumber error``` (due to infinite numbers while swapping)
2. ```Swap Error Cannot Get Allowance``` Same fix as above.
3. ```TreasuryOutgoingTable``` API call is made on swap.
4. ```SwapBox``` width fixes.
5. ```Cashout BATON/ SPTR/ claiming``` fixed to USDC
6. ```Swap Input Boxes``` autoupdate dependeing on other input value.
7. Balances auto-update after swapping.
8. Wallet connection checks:
-> Auto check for network ID
-> Auto request to change to the correst chain network
-> If chain does note exist than it adds it in.
-> the ```connectButton & AccountModal``` dot color based on the chain Id.
 
## Version 2 - 11.09.2022
The following updates have been made:
1. ```disconnect wallet``` button has been added. There is no official option to disconnect a wallet from metamask but I am simulating it currently.
https://github.com/MetaMask/metamask-extension/issues/8990
2. The ```screen refresh``` again and again issue may have been fixed. I have tried something for it but as I never had the issue in the first place, I could not test it. Let's see if people still have issue with dapp refreshing. It may something to do with having multiple wallets.
3. ```Invalid big number``` issue is fixed.
4. ```SPTR Price graph``` added on the swap page.
5. ```wallet dot color``` changed to green when connected.
6. ```Sidebar``` auto closes after clicking on any new option.
7. ```TreasuryOutgoing``` issue of duplicate values have been fixed. The current data in the monodb will have to be manually reconciled.
8. ```Airdrop``` database having multiple documents have been fixed. Now only 1 document will be updated with any new wallet data

## Version 1 - 02.09.2022
Original 

# Bundle Analyzer
[Ref] https://create-react-app.dev/docs/analyzing-the-bundle-size/
yarn run analyze

# Metamask

1. https://github.com/MetaMask/test-dapp Test: https://metamask.github.io/test-dapp/

# REPO REFERENCE

[1] Dynamic screen size: https://github.com/kingflamez/use-screen-size

[2] Burger menu: https://github.com/negomi/react-burger-menu

# ERROR

[***] The engine "node" is incompatible with this module.

[===] This is because yarn check for inter dependencies.

[SOLUTION] yarn config set ignore-engines true

# Extensions

1. Better Comments.
2. CSS to JSS
3. ESLint
4. GitLens
5. Import Cost
6. Live Server
7. Material Icon Theme
8. Prettier
9. Simple React Snippets
10. Solidity
11. yarn
12. start git-bash

#### Wand inestments responsive design:

< 450 width -> mobile

> 450 width -> tablet/ desktop

Common Responsive Breakpoints
Mobile: 360 x 640.
Mobile: 375 x 667.
Mobile: 360 x 720.
iPhone X: 375 x 812.
iPhone 12 Pro: 390 x 844.
Pixel 2: 411 x 731.
Tablet: 768 x 1024.
Laptop: 1366 x 768.
High-res laptop or desktop: 1920 x 1080.

# Decisions:

1. growth/ sell factor is absolute number, no %.
2. The buy/ sell have a tooltip showing the formula.
3. 'Your SCEPTER holdings' and 'Your SCEPTER value' -> no graph.
4. remove the 'minimum received' field from the swap pages

# Updates

CONNECTION_STRING = "mongodb+srv://reader:dbReader$2022@cluster0.leenlb7.mongodb.net/?retryWrites=true&w=majority"
Database: Wand_Data
Collection: mainContractData and Investments

# Database

### <|> Transaction List

cluster: wand-investments-cluster  
database: wand-database  
collection: investment-list

Example:

```json
{
  "date": "31/05/2022",
  "protocolName": "Anchor",
  "protocolUrl": "https://app.anchorprotocol.com/",
  "investedAmount": 1000000,
  "expectedAPY": 20,
  "transactionLink": "https://finder.terra.money/classic/tx/AC53B6A60009CE3AAFE147505C4235F5A1BC6EC5C56A7EF59D3C21839C3E25C3",
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
Need to update:
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

| Field                      | Type      | Description                                       | Example    |
| -------------------------- | --------- | ------------------------------------------------- | ---------- |
| timestamp                  | Timestamp | Timestamp of investment                           | 1653991989 |
| growthFactor               | Double    | The current growth factor of the project.         | 12         |
| sellFactor                 | Double    | The current sell factor of the project.           | 25         |
| airdropsDistributed3Months | Double    | Total amount of airdrops distributed in USD.      | 200000     |
| backingPrice               | Double    | The backing price of the token.                   | 100        |
| treasuryBalance            | Double    | The treasury balance of a particular token.       | 2000000    |
| circulatingSupply          | Double    | Current circulating supply of a particular token. | 10000      |
| redeemingPrice             | Double    | The redeeming price of BATON                      | 50         |
| USDT                       | Double    | Number of USDT token in treasury.                 | 10000000   |
| USDC                       | Double    | Number of USDC token in treasury.                 | 10000000   |
| UST                        | Double    | Number of UST token in treasury.                  | 10000000   |

<!-- Deploying react app to github -->

https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb#:~:text=When%20you've%20successfully%20deployed,is%20hosted%20on%20GitHub%20Pages.

<!-- Add the following to package.json -->

"homepage": "https://garencrownguard.github.io/wand-deploy",

<!-- Deploying react app to heroku -->

https://devcenter.heroku.com/articles/deploying-nodejs

Add the engines in the package.json
Remember to keep the yarn.lock file on the repo. This will help heroku use yarn instead of npm.
In the buildpack put this link: https://github.com/mars/create-react-app-buildpack
If the buildpack fails, try nodejs buildpack: https://github.com/heroku/heroku-buildpack-nodejs

```json
"engines": {
    "node": "16.15.1",
    "npm": "8.13.2",
    "yarn": "1.22.19"
  },
```

# Future work

1. prop types
2. support for other wallets.
3. state for isMobile classname.
4. emmet/ eslint
5. MainBlock1Card refactoring
6. Skeleton for cards to load.
7. Loading spinners on buttons
8. go back to slugs for route change. this reloads the whole page.
9. move all api calls to seperate file -> API call to reducer GET_FE call
10. After swapping/ selling/ buying recheck all the values and update them.
11. refactor all the toasts to one file.
12. refactor all contract interaction - allowance, swap, getdata
13. automatically render the changes (swapping -> updating balances)
14. wallet persistant.
15. sidebar selected color.
16. Improve performance by using bundle analyzer.
17. Encrypt Post API calls.
18. Sidebar icons error on firefox and some browsers.
19. Default network testing. (if user not on BSC Mainnet than error.)
20. make setTreasuryOutgoing api call when cashoutscepter is called.
21. refactor ischainIDcheck() checkChainId()
# Template

```js
import React from 'react'
import { connect } from 'react-redux'

const MainBlock2OutstandingStats = (props) => {
  const { stats, localwalletstats } = props

  return (
    <>
      Garen<>Crowngaurd</>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,

    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(MainBlock2OutstandingStats)
```

```js
import React from 'react'

import MainBlock1Card from '../MainBlock1Card'

const GraphTotalValueDepositArea = (props) => {
  return (
    <MainBlock1Card minHeight="345px" flexGrow={1}>
      Chart 1
    </MainBlock1Card>
  )
}

export default GraphTotalValueDepositArea
```
