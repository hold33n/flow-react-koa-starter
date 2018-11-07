// @flow

import React, { PureComponent } from "react";
import moment from "moment";
import type { Props } from "./types";

export default class FlightCard extends PureComponent<Props, {}> {
  render() {
    const { from, to, departureTime, landingTime, price } = this.props.data;

    return (
      <div className="flightCard">
        <h3 className="flightCard__name">
          {from} - {to}
        </h3>
        <div className="flightCard__info">
          <span className="flightCard__time">
            {departureTime} - {landingTime}
          </span>
          <h2 className="flightCard__price">{price}$</h2>
        </div>
      </div>
    );
  }
}
