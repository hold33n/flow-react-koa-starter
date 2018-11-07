// @flow

import React, { PureComponent } from "react";
import type { Props, State } from "./types";

export default class OutlineButton extends PureComponent<Props, State> {
  render() {
    const { icon, value, handleClick } = this.props;
    return (
      <button className="outlineButton" onClick={handleClick}>
        {icon && <span className="outlineButton__icon">{icon}</span>}
        {value}
      </button>
    );
  }
}
