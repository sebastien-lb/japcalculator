import { createMuiTheme, Theme } from "@material-ui/core";

export interface CustomTheme extends Theme {}

export const theme: CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#F9C41C"
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        color: "white",
        boxShadow: "0px 2px 20px #00000029"
      },
      label: {
        textTransform: "none"
      }
    }
  }
});
