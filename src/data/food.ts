import Miso from "../assets/images/food/Miso.svg";
import Meat from "../assets/images/food/Brochette viande.svg";
import Maki from "../assets/images/food/Maki.svg";
import Sushi from "../assets/images/food/Sushi.svg";
import California from "../assets/images/food/California.svg";
import BeefCheese from "../assets/images/food/Brochette boeuf fro.svg";

export interface FoodItem {
  name: string;
  kcal: number;
  imageUrl: string;
}

// values from: http://dieteplaisir.canalblog.com/archives/2012/05/18/24268064.html
export const FOOD_ITEMS: Array<FoodItem> = [
  {
    name: "Sushi",
    kcal: 45,
    imageUrl: Sushi
  },
  {
    name: "Maki",
    kcal: 20,
    imageUrl: Maki
  },
  {
    name: "California",
    kcal: 35,
    imageUrl: California
  },
  {
    name: "Boeuf Fromage",
    kcal: 175,
    imageUrl: BeefCheese
  },
  {
    name: "Soupe Miso",
    kcal: 50,
    imageUrl: Miso
  },
  {
    name: "Viande",
    kcal: 130,
    imageUrl: Meat
  }
];
