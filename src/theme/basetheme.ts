import { createTheme, ThemeOptions } from "@mui/material/styles";

export interface IColors {
  white: string;
  blue: string;
  blueLight: string;
  blueDark: string;
  green: string;
  greenLight: string;
  greenLightest: string;
  greenDark: string;
  grey: string;
  greyLight: string;
  greyDark: string;
  greyBorder: string;
  greenAlt: string;
  validateFail: string;
  validateOk: string;
  red: string;
  redLight: string;
  redDark: string;
  black: string;
  blackLight: string;
  blackDark: string;
  coolBlue: string;
  coolBlueLight: string;
  coolBlueDark: string;
  greyBackground: string;
  greyDivider: string;
  greenBar: string;
  greenSuperLight: string;
}
export default function defaultCreateTheme(opts: ThemeOptions) {
  return createTheme(opts);
}
