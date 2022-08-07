import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import links from "resources/links";
import LoadingComponent from "components/loading";

const DashboardComponent = lazy(() => import("./dashboard"));
const TicketComponent = lazy(() => import("./tickets"));
const AccountComponent = lazy(() => import("./account"));
const SwapComponent = lazy(() => import("./swap"));

const TreasuriesPage = lazy(() => import("components/4pages/TreasuriesPage"));

function PrivateRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={links.dashboard} component={DashboardComponent} />
        <Route exact path={links.account} component={AccountComponent} />
        <Route exact path={links.swap} component={SwapComponent} />
        <Route exact path={links.bridge} render={() => <div>Bridge</div>} />
        <Route exact path={links.lending} component={TicketComponent} />
        <Route exact path={links.treasuries} component={TreasuriesPage} />
        <Route
          exact
          path={links.governance}
          render={() => <div>Governance</div>}
        />
        <Route exact path={links.vote} render={() => <div>Vote</div>} />
        <Route exact path={links.docs} render={() => <div>Docs</div>} />
        {/* <Route exact path={links.agents} render={() => <div>agents</div>} />
                <Route exact path={links.articles} render={() => <div>articles</div>} />
                <Route exact path={links.settings} render={() => <div>settings</div>} />
                <Route exact path={links.subscription} render={() => <div>subscription</div>} /> */}
        <Redirect to={links.homepage} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoutes;
