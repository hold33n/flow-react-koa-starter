import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import TopBar from "components/TopBar";
import LeftBar from "components/LeftBar";
import NoMatch from "pages/NoMatch";
import { connect } from "react-redux";
import store from "store";

class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <TopBar />
        <LeftBar />

        <div className="main">
          <Switch>
            {/* <Route exact path="/app" component={ToDo} />
            <Route exact path="/app/metrics" component={Metrics} />
            <Route exact path="/app/settings" component={Settings} />
            <Redirect to="/app" /> */}
          </Switch>
        </div>
      </section>
    );
  }
}

export default Dashboard;
