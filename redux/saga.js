import { all } from "redux-saga/effects";
import { watchAuth } from "ducks/auth";

export default function* saga() {
  yield all([watchAuth()]);
}
