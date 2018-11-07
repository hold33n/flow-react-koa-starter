// @flow

import {
  SIGN_IN_REQUEST,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from "./index";

export type UserReq = {|
  userName: string,
  password: string
|};

export type User = {|
  +id: string,
  +email: string
|};

export type State = {|
  +user: null | User,
  +progress: boolean,
  +error: null | string
|};

export type Action =
  | {|
      +type: typeof SIGN_IN_REQUEST,
      payload: UserReq
    |}
  | {| +type: typeof SIGN_IN_START |}
  | {|
      +type: typeof SIGN_IN_SUCCESS,
      payload: {
        user: User
      }
    |}
  | {|
      +type: typeof SIGN_IN_FAIL,
      payload: {
        error: string
      }
    |};
