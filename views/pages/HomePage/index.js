import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  componentWillMount() {
    document.body.classList.add("body-dark");
  }
  componentWillUnmount() {
    document.body.classList.remove("body-dark");
  }

  render() {
    return (
      <section className="home">
        <h1>Starter App</h1>
        <div>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </section>
    );
  }
}
