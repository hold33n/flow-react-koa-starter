// @flow
import type { User } from "ducks/auth/types";

export type State = {
  settingsDropdownVisible: boolean,
  timersDropdownVisible: boolean
};

export type Props = {|
  user: User
|};
