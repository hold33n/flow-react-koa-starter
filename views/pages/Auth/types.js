// @flow

import type { UserReq } from "ducks/auth/types";

export type State = UserReq;

export type Props = {|
  formState: "SignIn" | "SignUp",
  progress: boolean,
  error: null | string,
  navigation: Object
|};
