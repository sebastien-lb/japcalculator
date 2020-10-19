import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { CustomTheme } from "../../style/theme";

type ClassNames = "container" | "picture" | "restaurantName" | "address";
interface OwnProps {
  classes: Record<ClassNames, string>;
  imgSrc: string;
  restaurantName: string;
  address: string;
}

type Props = OwnProps;

export const RestaurantCard: React.FC<Props> = (props: Props) => {
  const { classes, imgSrc, restaurantName, address } = props;
  return (
    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          image={imgSrc}
          title="Japanese Restaurant"
          className={classes.picture}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.restaurantName}
          >
            {restaurantName}
          </Typography>
          <Typography variant="body2" className={classes.address}>
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {
    width: 220,
    textAlign: "left"
  },
  picture: {
    height: 128
  },
  restaurantName: {
    fontSize: 15
  },
  address: {
    fontSize: 10
  }
});

export default withStyles(styles)(RestaurantCard);
