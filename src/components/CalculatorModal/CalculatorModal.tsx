import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { CustomTheme } from "../../style/theme";
import { Button } from "@material-ui/core";

import { default as FoodTile } from "../FoodTile/FoodTile";

import { FOOD_ITEMS, FoodItem } from "../../data/food";

type ClassNames =
  | "container"
  | "mainFoodItems"
  | "closeContainer"
  | "itemContainer"
  | "buttonContainer";
interface OwnProps {
  classes: Record<ClassNames, string>;
  onClose?: () => void;
  open: boolean;
}

type Props = OwnProps;

export const CalculatorModal: React.FC<Props> = (props: Props) => {
  const { classes, onClose, open } = props;

  const [values, setValues] = useState<
    { [k in string]: { value: number; kcal: number } }
  >({});

  const handleChange = (itemName: string, itemKcal: number) => (
    value: number
  ) => {
    setValues({
      ...values,
      [itemName]: { value, kcal: value * itemKcal }
    });
  };

  const result = Object.keys(values).reduce((acc: number, itemName: string) => {
    return acc + values[itemName].kcal;
  }, 0);

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"md"}>
      <div className={classes.closeContainer}>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent>
        <div className={classes.mainFoodItems}>
          {FOOD_ITEMS.map((item: FoodItem) => (
            <div className={classes.itemContainer} key={item.name}>
              <FoodTile
                name={item.name}
                imgSrc={item.imageUrl}
                value={item.name in values ? values[item.name].value : 0}
                onChange={handleChange(item.name, item.kcal)}
              />
            </div>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="contained">{result} Kcal</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {},
  mainFoodItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  closeContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  itemContainer: {
    display: "flex",
    alignItems: "flex-end",
    margin: theme.spacing(5)
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3)
  }
});

export default withStyles(styles)(CalculatorModal);
