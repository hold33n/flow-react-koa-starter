// @flow

import React, { PureComponent } from "react";
import type { Props, State } from "./types";

// [].map.call(targetElements, el => {
//   el.onmouseenter = () => {
//     gradientAnimation(el, 0, -40);
//   };

//   el.onmouseleave = () => {
//     gradientAnimation(el, -40, 0);
//   };
// });

export default class GradientButton extends PureComponent<Props, State> {
  // The `?` here is important because you may not always have the instance.
  button: ?HTMLButtonElement;

  render() {
    return (
      <button
        className="gradientButton"
        ref={el => (this.button = el)}
        onClick={this.props.handleClick}
      >
        {this.props.value}
      </button>
    );
  }
}
