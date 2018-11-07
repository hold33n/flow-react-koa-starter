// @flow

import React, { Component } from "react";
import type { Props } from "./types";

class InputField extends Component<Props, {}> {
  static defaultProps = {
    type: "text",
    style: "dark"
  };

  render() {
    const { inputName, inputValue, handleChange, type, style } = this.props;

    const className =
      style === "dark"
        ? "input-field__input"
        : "input-field__input input-field__input-light";

    return (
      <div className="input-field">
        {/* <span className="input-field__label">{inputName}</span> */}
        <input
          className={className}
          type={type}
          onChange={e => handleChange(e.target.value)}
          value={inputValue}
          // {...props}
          placeholder={inputName}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    );
  }
}

export default InputField;
