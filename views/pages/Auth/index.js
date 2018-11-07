// @flow

import React, { Component } from "react";
import InputField from "components/InputField";
import { connect } from "react-redux";
import { signIn, clearAuthError } from "ducks/auth";
import OutlineButton from "components/OutlineButton";
import GradientButton from "components/GradientButton";
import store from "store";
import type { Props, State } from "./types";
import { push } from "react-router-redux";
import { fetchUserAuth } from "utils";

class AuthPage extends Component<Props, State> {
  state = {
    userName: "",
    password: ""
  };

  componentWillMount() {
    // $FlowFixMe
    document.body.classList.add("body-dark");
  }
  componentWillUnmount() {
    // $FlowFixMe
    document.body.classList.remove("body-dark");
  }

  handleInputChange = inputName => value =>
    this.setState({ [inputName]: value });

  handleSubmit = () => {
    this.props.formState === "SignUp"
      ? () => {}
      : store.dispatch(
          signIn({
            userName: this.state.userName,
            password: this.state.password
          })
        );
  };

  render() {
    return (
      <section className="auth">
        <h2 className="auth__heading">
          {this.props.formState === "SignUp" ? "Create Account" : "Log in"}
        </h2>

        <span className="auth__error-text">{this.props.error}</span>

        <InputField
          inputName="Username"
          inputValue={this.state.userName}
          handleChange={this.handleInputChange("userName")}
        />

        <InputField
          inputName="Password"
          type="password"
          inputValue={this.state.password}
          handleChange={this.handleInputChange("password")}
        />

        <GradientButton
          handleClick={this.handleSubmit}
          value={this.props.formState === "SignUp" ? "Sign Up" : "Sign In"}
        />

        <div className="auth__bottom-text">
          {this.props.formState === "SignUp"
            ? "Already have an account?"
            : "Haven't got an account?"}
          <span
            onClick={() => {
              if (this.props.error) {
                store.dispatch(clearAuthError());
              }

              this.props.formState === "SignUp"
                ? store.dispatch(push("/sign-in"))
                : store.dispatch(push("/sign-up"));
            }}
          >
            {this.props.formState === "SignUp" ? "Sign in" : "Sign up"}
          </span>
        </div>
      </section>
    );
  }
}

export default connect(({ auth: { progress, error } }) => ({
  progress,
  error
}))(AuthPage);
