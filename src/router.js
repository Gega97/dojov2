import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Kata7 from "./components/kata7/kata7";
import Kata3 from "./components/kata3/kata3";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact={true} path="/" component={Kata7} />
      <Route path="/main" component={Kata3} />
    </Switch>
  </Router>
);
