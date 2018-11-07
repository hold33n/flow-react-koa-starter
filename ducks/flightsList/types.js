// @flow

export type FlightType = {|
  from: string,
  to: string,
  departureTime: string,
  landingTime: string,
  price: number
|};

export type State = {|
  +data: [] | FlightType[],
  +progress: boolean,
  +error: null | string
|};
