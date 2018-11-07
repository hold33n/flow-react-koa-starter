import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "pages/Auth";
import Dashboard from "pages/Dashboard";
import NoMatch from "pages/NoMatch";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "store";
import PrivateRoute from "components/PrivateRoute";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route
                exact
                path="/sign-in"
                render={() => <Auth formState="SignIn" />}
              />
              <Route
                exact
                path="/sign-up"
                render={() => <Auth formState="SignUp" />}
              />
              <PrivateRoute path="/app" render={() => <Dashboard />} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
