import { RouterState } from "connected-react-router";
import {
  RestaurantState,
  RESTAURANT_STATE_SLICE_NAME
} from "./restaurant/restaurant.state";

export interface State {
  router: RouterState;
  [RESTAURANT_STATE_SLICE_NAME]: RestaurantState;
}
