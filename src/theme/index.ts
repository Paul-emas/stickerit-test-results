import { CSSProperties } from "@mui/styles";
import { ComponentsOverrides } from "@mui/material";
import createBaseMuiTheme, { IColors } from "./basetheme";

const fontFormats = ["woff2", "woff", "eot", "ttf"];
const fontWeights = ["regular", 700, 600, 500, 400];

const zip = <T, U>(arr1: T[], arr2: U[]) => {
  return arr1.flatMap((item) => {
    return arr2.map((item2) => {
      return [item, item2];
    });
  });
};

const zipped = zip(fontFormats, fontWeights);

const fonts: CSSProperties["@font-face"] = zipped.map(
  ([format, fontWeight]) => {
    return {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight,
      src: `url(https://media.stickerit.co/fonts/Poppins/Poppins-v19-latin-${fontWeight}.${format}) format('${format}')`,
    };
  }
);

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    colors: IColors;
    primaryButtonColor: string;
    buttonHoverBackground: string;
    modal: {
      buttonBarColor: string;
    };
    overrides: ComponentsOverrides;
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    colors: typeof colors;
    primaryButtonColor: string;
    buttonHoverBackground: string;
    modal: {
      buttonBarColor: string;
    };
    overrides: ComponentsOverrides;
  }
}

export const colors: IColors = {
  coolBlue: "#0076cf",
  coolBlueLight: "#cce4f6",
  coolBlueDark: "#004b9d",

  blue: "#141b4d",
  blueLight: "#424279",
  blueDark: "#000026",

  green: "#33e4c9",
  greenLight: "#99f2e4",
  greenLightest: "#E6FCF9",
  greenDark: "#00b19d",
  greenBar: "#ADF0E4",
  greenSuperLight: "#C8FFF4",

  greenAlt: "#1bd114",
  validateFail: "#e40028",
  validateOk: "#1bd114",

  red: "#E4002B",
  redLight: "#FF5555",
  redDark: "#A90003",

  white: "#ffffff",

  grey: "#7f8481",
  greyLight: "#aeb4b0",
  greyDark: "#535755",
  greyBorder: "#808381",
  greyBackground: "#F3F3F3",
  greyDivider: "#808381",

  black: "#000000",
  blackLight: "#2C2C2C",
  blackDark: "#000000",
};

const atomicTheme = createBaseMuiTheme({
  colors,
  primaryButtonColor: colors.coolBlue,
  buttonHoverBackground: colors.coolBlueDark,
  modal: {
    buttonBarColor: colors.greenLight,
  },
  typography: {
    fontFamily: "Poppins, Arial",
  },
  palette: {
    background: {
      default: "#ffffff",
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "Poppins, Arial",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": fonts,
      },
    },
  },
});

export default atomicTheme;
