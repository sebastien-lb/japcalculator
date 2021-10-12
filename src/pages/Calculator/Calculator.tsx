import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { CustomTheme } from "../../style/theme";
import { Button } from "@material-ui/core";

import kanjiSun from "../../assets/kanji/Kanji sun.svg";
import kanjiBook from "../../assets/kanji/Kanji book.svg";

import kanjiRight from "../../assets/kanji/Kanji-right.svg";
import kanjiLeft from "../../assets/kanji/Kanji-left.svg";

import { FOOD_ITEMS, FoodItem } from "../../data/food";
import { FoodTile } from "../../components";

import { sendData } from "../../utils/send-data";

type ClassNames =
  | "container"
  | "circleContainer"
  | "redCircle"
  | "kanjiSun"
  | "kanjiBook"
  | "calculatorContainer"
  | "calculatorInnerContainer"
  | "scrollContainer"
  | "mainFoodItems"
  | "itemContainer"
  | "buttonContainer"
  | "lateralBar"
  | "barSpacer";
interface OwnProps {
  classes: Record<ClassNames, string>;
}

type Props = OwnProps;

export const CalculatorPage: React.FC<Props> = (props: Props) => {
  const { classes } = props;

  const [values, setValues] = useState<
    { [k in string]: { value: number; kcal: number } }
  >({});

  const handleChange = (itemName: string, itemKcal: number) => (
    value: number
  ) => {
    setValues({
      ...values,
      [itemName]: { value, kcal: value * itemKcal },
    });
  };

  const result = Object.keys(values).reduce((acc: number, itemName: string) => {
    return acc + values[itemName].kcal;
  }, 0);

  return (
    <div className={classes.container}>
      <div className={classes.calculatorContainer}>
        <div className={classes.lateralBar}>
          <img src={kanjiLeft} alt="kanji" />
          <div className={classes.barSpacer} />
        </div>
        <div className={classes.calculatorInnerContainer}>
          <div className={classes.scrollContainer}>
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
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="contained" onClick={sendData(result)}>
              {result} Kcalories
            </Button>
          </div>
        </div>
        <div className={classes.lateralBar}>
          <div className={classes.barSpacer} />
          <img src={kanjiRight} alt="kanji" />
        </div>
      </div>
      <div className={classes.circleContainer}>
        <div className={classes.redCircle} />
      </div>
      <img className={classes.kanjiSun} src={kanjiSun} alt="kanji sun" />
      <img className={classes.kanjiBook} src={kanjiBook} alt="kanji book" />
    </div>
  );
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  circleContainer: {
    position: "absolute",
    top: 20,
    bottom: 20,
    right: 0,
    left: 0,
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 200,
  },
  redCircle: {
    height: "calc(100vh - 40px)",
    width: "calc(100vh - 40px)",
    borderRadius: "50%",
    backgroundColor: "#BF2424",
  },
  kanjiSun: {
    position: "absolute",
    left: -200,
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginBottom: "auto",
    height: "85%",
    zIndex: 100,
  },
  kanjiBook: {
    position: "absolute",
    right: -200,
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginBottom: "auto",
    height: "85%",
    zIndex: 100,
  },
  calculatorContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "fit-content",
    height: "fit-content",
    maxHeight: "90vh",
    maxWidth: "80%",
    margin: "auto",
    zIndex: 300,
    background: "white",
    borderRadius: 40,
    boxShadow: "0px 6px 30px #00000033",
    padding: 20,
    display: "flex",
  },
  calculatorInnerContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "calc(100% - 64px)",
  },
  scrollContainer: {
    overflowY: "auto",
  },
  mainFoodItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  itemContainer: {
    display: "flex",
    alignItems: "flex-end",
    margin: theme.spacing(5),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: 36,
    flex: 1,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  lateralBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  barSpacer: {
    flex: 1,
    width: 0,
    border: "1px solid black",
    margin: 10,
  },
});

export default withStyles(styles)(CalculatorPage);
