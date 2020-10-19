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
      root: {
        background:
          "transparent linear-gradient(101deg, #F78E0D 0%, #F9C41C 100%) 0% 0% no-repeat padding-box"
      },
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
