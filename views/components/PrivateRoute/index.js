// @flow

import React, { PureComponent } from "react";
import { Route, Redirect } from "react-router-dom";
import type { State, Props } from "./types";
import { fetchUserAuth } from "utils";
import { connect } from "react-redux";

class PrivateRoute extends PureComponent<Props, State> {
  render() {
    return window.localStorage.flightAppUserName ? (
      <Route render={() => this.props.render()} />
    ) : (
      <Redirect
        to={{
          pathname: "/sign-in",
          state: { from: this.props.location }
        }}
      />
    );
  }
}

export default PrivateRoute;
