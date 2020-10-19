import { Restaurant } from "./restaurant.types";

export const RESTAURANT_STATE_SLICE_NAME = "RestaurantState";

export interface RestaurantState {
  restaurants?: Array<Restaurant>;
  nextUrl?: string | null;
  isLoadingRestaurant: boolean;
  isErrorFetchingRestaurant: boolean;
}
