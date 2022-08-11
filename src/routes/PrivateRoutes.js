import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import links from "resources/links";

const TreasuriesPage = lazy(() => import("components/4pages/TreasuriesPage"));
const DashboardPage = lazy(() => import("components/4pages/DashboardPage"));
const AccountPage = lazy(() => import("components/4pages/AccountPage"));

function PrivateRoutes() {
  return (
    <Suspense>
      <Switch>
        <Route exact path={links.dashboard} component={DashboardPage} />
        <Route exact path={links.account} component={AccountPage} />
        {/* <Route exact path={links.swap} component={SwapComponent} />*/}
        <Route exact path={links.treasuries} component={TreasuriesPage} />
        <Route
          exact
          path={links.governance}
          render={() => <div>Governance</div>}
        />
        <Route exact path={links.vote} render={() => <div>Vote</div>} />
        <Route exact path={links.docs} render={() => <div>Docs</div>} />
        <Redirect to={links.homepage} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoutes;
