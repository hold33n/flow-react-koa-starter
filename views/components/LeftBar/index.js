// @flow

import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import type { State, Props } from "./types";

class LeftBar extends PureComponent<Props, State> {
  render() {
    const { pathname } = this.props;

    const menuItems = [
      {
        // icon: <ToDoList />,
        route: "/app",
        title: "Flights"
      },
      {
        // icon: <PieChart />,
        route: "/app/metrics",
        title: "Metrics"
      },
      {
        // icon: <Settings />,
        route: "/app/settings",
        title: "Settings"
      }
    ];

    return (
      <div className="leftbar">
        <Link to="/app" className="leftbar__logo logo">
          TK
        </Link>

        <ul className="leftbar__menu">
          {menuItems.map(({ route, title }) => (
            <li
              className={`leftbar__menu-item ${
                pathname === route ? "active" : ""
              }`}
              key={route}
            >
              <Link to={route}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(({ router: { location } }) => ({
  pathname: location.pathname
}))(LeftBar);
