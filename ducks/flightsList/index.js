// @flow

import { all, take, takeEvery, put, call, select } from "redux-saga/effects";
import { baseURL } from "config";
import axios from "axios";
import { createAction, handleActions, combineActions } from "redux-actions";
import type { State } from "./types";
import { push } from "react-router-redux";
import { eventChannel, END } from "redux-saga";

/**
 * Constants
 * */

export const moduleName: string = "flightsList";

export const FETCH_FLIGHTS_REQUEST: "AUTH/FETCH_FLIGHTS_REQUEST" =
  "AUTH/FETCH_FLIGHTS_REQUEST";
export const FETCH_FLIGHTS_START: "AUTH/FETCH_FLIGHTS_START" =
  "AUTH/FETCH_FLIGHTS_START";
export const FETCH_FLIGHTS_SUCCESS: "AUTH/FETCH_FLIGHTS_SUCCESS" =
  "AUTH/FETCH_FLIGHTS_SUCCESS";
export const FETCH_FLIGHTS_FAIL: "AUTH/FETCH_FLIGHTS_FAIL" =
  "AUTH/FETCH_FLIGHTS_FAIL";

/**
 * Reducer
 * */

export const initialState: State = {
  data: [
    {
      from: "Kyiv",
      to: "New York",
      departureTime: "3PM",
      landingTime: "10PM",
      price: 520
    },
    {
      from: "Totonto",
      to: "LA",
      departureTime: "3PM",
      landingTime: "10PM",
      price: 120
    },
    {
      from: "Paris",
      to: "New York",
      departureTime: "3PM",
      landingTime: "10PM",
      price: 320
    },
    {
      from: "Berlin",
      to: "Paris",
      departureTime: "3PM",
      landingTime: "10PM",
      price: 80
    }
  ],
  progress: false,
  error: null
};

const flightsListReducer = handleActions(
  {
    [FETCH_FLIGHTS_START]: (state: State) => ({
      ...state,
      progress: true,
      error: null
    }),
    [FETCH_FLIGHTS_SUCCESS]: (state: State, action) => ({
      ...initialState,
      data: action.payload.classesList
    }),
    [FETCH_FLIGHTS_FAIL]: (state: State, action) => ({
      ...state,
      error: action.payload.error
    })
  },
  initialState
);

export default flightsListReducer;

/**
 * Selectors
 * */

export const stateSelector = (state: Object): State => state[moduleName];

/**
 * Action Creators
 * */

// export const fetchFlightsList = createAction(FETCH_FLIGHTS_REQUEST);

/**
 * Sagas
 * */

/* eslint-disable consistent-return */
// export function* fetchFlightsListSaga(): Generator<any, any, any> {
//   const state = yield select(stateSelector);

//   if (state.progress) return true;

//   yield put({ type: FETCH_FLIGHTS_START });

//   try {
//     const signInRef = {
//       method: "get",
//       url: "/trainer/class_sessions",
//       baseURL,
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json"
//       }
//     };

//     const {
//       data: { data }
//     } = yield call(axios, signInRef);

//     yield put({
//       type: FETCH_FLIGHTS_SUCCESS,
//       payload: { classesList: data }
//     });
//   } catch (res) {
//     yield put({
//       type: FETCH_FLIGHTS_FAIL,
//       payload: {
//         errors: res.response.data.errors
//       }
//     });
//   }
// }

// export function* watchflightsList(): mixed {
//   yield takeEvery(FETCH_FLIGHTS_REQUEST, fetchFlightsListSaga);
// }
