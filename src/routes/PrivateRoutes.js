import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import links from "resources/links";

const TreasuriesPage = lazy(() => import("components/4pages/TreasuriesPage"));
const DashboardPage = lazy(() => import("components/4pages/DashboardPage"));
const AccountPage = lazy(() => import("components/4pages/AccountPage"));
const SwapPage = lazy(() => import("components/4pages/SwapPage"));
const ContractInteractionPage = lazy(() =>
  import('components/4pages/ContractInteractionPage')
)


const PrivateRoutes = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path={links.dashboard} component={DashboardPage} />
        <Route exact path={links.account} component={AccountPage} />
        <Route exact path={links.swap} component={SwapPage} />
        <Route
          exact
          path={links.bridge}
          render={() => <div>Bridge coming soon!</div>}
        />
        <Route
          exact
          path={links.lending}
          render={() => <div>Lending coming soon!</div>}
        />
        <Route exact path={links.treasuries} component={TreasuriesPage} />
        <Route
          exact
          path={links.governance}
          render={() => <div>Governance coming soon!</div>}
        />
        <Route
          exact
          path={links.vote}
          render={() => <div>Vote coming soon!</div>}
        />
        <Route
          exact
          path={links.docs}
          render={() => <div>Docs coming soon!</div>}
        />
        <Route
          exact
          path={links.contractionInteraction}
          component={ContractInteractionPage}
        />
        <Redirect to={links.homepage} />
      </Switch>
    </Suspense>
  )
}

export default PrivateRoutes;
