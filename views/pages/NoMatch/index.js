// @flow

import React, { PureComponent } from "react";

class NoMatch extends PureComponent<{}, {}> {
  render() {
    return (
      <section className="nomatch">
        <h1>Sorry, the page you were looking for doesn’t exist</h1>
      </section>
    );
  }
}

export default NoMatch;
