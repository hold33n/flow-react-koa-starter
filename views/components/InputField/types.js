// @flow

export type Props = {
  inputName: string,
  inputValue: string,
  handleChange(string): void,
  type?: string,
  style?: "dark" | "light"
};
