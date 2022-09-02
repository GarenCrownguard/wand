# wand

FrontEnd for Wand Investments project.
By Garen Crowngaurd.

git config --global user.name "Garen Crowngaurd"
git config --global user.email 0xgaren@protonmail.com

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
