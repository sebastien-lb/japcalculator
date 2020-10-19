import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";

import { CustomTheme } from "../../style/theme";

import MjpSearch from "../../assets/design/mjp-icon.svg";

type ClassNames = "container" | "input" | "logoSearch";
interface OwnProps {
  classes: Record<ClassNames, string>;
}

type Props = OwnProps;

export const SearchBar: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <img src={MjpSearch} alt="search" className={classes.logoSearch} />
      <InputBase
        className={classes.input}
        placeholder="Where do you want to eat ? "
      />
    </div>
  );
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {
    display: "flex",
    marginBottom: theme.spacing(2)
  },
  logoSearch: {
    width: 45
  },
  input: {
    width: "100%",
    fontSize: 32
  }
});

export default withStyles(styles)(SearchBar);
