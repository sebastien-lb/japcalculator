import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { CustomTheme } from "../../style/theme";

type ClassNames = "container";
type SizeType = "small" | "medium" | "large";
interface OwnProps {
  size?: SizeType;
}

const SIZE_TYPES: { [k in SizeType]: number } = {
  small: 24,
  medium: 48,
  large: 80
};

type Props = OwnProps;

export const Loader: React.FC<Props> = (props: Props) => {
  const { size = "small" } = props;
  return <CircularProgress size={SIZE_TYPES[size]} />;
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {}
});

export default withStyles(styles)(Loader);
