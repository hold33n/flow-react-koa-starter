// @flow

import React, { PureComponent } from "react";
import ArrowDown from "icons/ArrowDown";
import { connect } from "react-redux";
import { signOut } from "ducks/auth";
import store from "store";
import type { State, Props } from "./types";

class TopBar extends PureComponent<Props, State> {
  state = {
    settingsDropdownVisible: false,
    timersDropdownVisible: false
  };

  toggleDropdownVisibility = dropdownName => () => {
    this.state[dropdownName]
      ? this.setState({ [dropdownName]: false })
      : this.setState({ [dropdownName]: true });
  };

  render() {
    const { user } = this.props;

    const settingsDropdownClassName = this.state.settingsDropdownVisible
      ? "dropdown dropdown_visible"
      : "dropdown";

    const timersDropdownClassName = this.state.timersDropdownVisible
      ? "timers-list dropdown dropdown_visible"
      : "timers-list dropdown";

    return (
      <div className="topbar">
        <div className="topbar__name">
          <span
            className="topbar__name-label"
            onClick={this.toggleDropdownVisibility("settingsDropdownVisible")}
          >
            user
          </span>
          <span
            className="topbar__name-icon"
            onClick={this.toggleDropdownVisibility("settingsDropdownVisible")}
          >
            <ArrowDown />
          </span>
          <div
            className={settingsDropdownClassName}
            onClick={() => store.dispatch(signOut())}
          >
            Sign Out
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ auth: { user } }) => ({ user }))(TopBar);
