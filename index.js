import "babel-polyfill";
import "react-hot-loader/patch";
import "./styles/main.sass";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./views/components/App";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./views/components/App", () => {
    const NextApp = require("./views/components/App").default;
    render(NextApp);
  });
}
