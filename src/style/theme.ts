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
          "transparent linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); 0% 0% no-repeat padding-box"
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
