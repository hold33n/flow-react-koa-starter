// @flow

import { all, take, takeEvery, put, call, select } from "redux-saga/effects";
import { baseURL } from "config";
import axios from "axios";
import { createAction, handleActions, combineActions } from "redux-actions";
import type { State, UserReq } from "./types";
import { push } from "react-router-redux";
import { eventChannel, END } from "redux-saga";

/**
 * Constants
 * */

export const moduleName: string = "auth";

export const SIGN_IN_REQUEST: "AUTH/SIGN_IN_REQUEST" = "AUTH/SIGN_IN_REQUEST";
export const SIGN_IN_START: "AUTH/SIGN_IN_START" = "AUTH/SIGN_IN_START";
export const SIGN_IN_SUCCESS: "AUTH/SIGN_IN_SUCCESS" = "AUTH/SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL: "AUTH/SIGN_IN_FAIL" = "AUTH/SIGN_IN_FAIL";

export const SIGN_OUT_REQUEST: "AUTH/SIGN_OUT_REQUEST" =
  "AUTH/SIGN_OUT_REQUEST";
export const SIGN_OUT_START: "AUTH/SIGN_OUT_START" = "AUTH/SIGN_OUT_START";
export const SIGN_OUT_SUCCESS: "AUTH/SIGN_OUT_SUCCESS" =
  "AUTH/SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAIL: "AUTH/SIGN_OUT_FAIL" = "AUTH/SIGN_OUT_FAIL";

export const CLEAR_AUTH_ERROR: "AUTH/CLEAR_AUTH_ERROR" =
  "AUTH/CLEAR_AUTH_ERROR";

/**
 * Reducer
 * */

export const initialState: State = {
  // formState: 'SignIn',
  user: null,
  progress: false,
  error: null
};

const authReducer = handleActions(
  {
    [combineActions(SIGN_IN_START, SIGN_OUT_START)]: (state: State) => ({
      ...state,
      progress: true,
      error: null
    }),
    [SIGN_IN_SUCCESS]: (state: State, action) => ({
      ...initialState,
      user: {
        email: action.payload.email
      }
    }),
    [SIGN_OUT_SUCCESS]: (state: State) => ({
      user: null,
      progress: false,
      error: null
    }),
    [combineActions(SIGN_IN_FAIL, SIGN_OUT_FAIL)]: (state: State, action) => ({
      ...state,
      progress: false,
      error: action.payload.errors
    }),
    [CLEAR_AUTH_ERROR]: (state: State, action) => ({
      ...state,
      error: null
    })
  },
  initialState
);

export default authReducer;

/**
 * Selectors
 * */

export const stateSelector = (state: Object): State => state[moduleName];

/**
 * Action Creators
 * */

export const signIn = createAction(SIGN_IN_REQUEST);
export const signOut = createAction(SIGN_OUT_REQUEST);
export const clearAuthError = createAction(CLEAR_AUTH_ERROR);

/**
 * Sagas
 * */

/* eslint-disable consistent-return */
export function* signInSaga({
  payload: { userName, password }
}: {
  payload: UserReq
}): Generator<any, any, any> {
  const state = yield select(stateSelector);

  if (state.progress) return true;

  yield put({ type: SIGN_IN_START });

  try {
    if (userName === "user" && password === "password") {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: { user: "user" }
      });

      localStorage.setItem("flightAppUserName", userName);

      yield put(push("/app"));
    } else {
      yield put({
        type: SIGN_IN_FAIL,
        payload: {
          errors: "User's data is invalid"
        }
      });
    }
  } catch (error) {
    yield put({
      type: SIGN_IN_FAIL,
      payload: { error }
    });
  }
}

function* signOutSaga() {
  const state = yield select(stateSelector);

  if (state.progress || state.error) return true;

  yield put({ type: SIGN_OUT_START });

  try {
    localStorage.removeItem("flightAppUserName");

    yield put({
      type: SIGN_OUT_SUCCESS
    });

    yield put(push("/sign-in"));
  } catch (error) {
    yield put({
      type: SIGN_OUT_FAIL,
      payload: { error }
    });
  }
}

export function* watchAuth(): mixed {
  yield takeEvery(SIGN_IN_REQUEST, signInSaga);

  yield takeEvery(SIGN_OUT_REQUEST, signOutSaga);
}
