import {
  FETCH_RESTAURANT_REQUEST,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_ERROR
} from "./restaurant.constants";
import { Restaurant } from "./restaurant.types";

export const fetchRestaurant = (fetchNext = false) => ({
  type: FETCH_RESTAURANT_REQUEST as typeof FETCH_RESTAURANT_REQUEST,
  payload: { fetchNext }
});

export const fetchRestaurantSuccess = (
  restaurants: Array<Restaurant>,
  nextUrl: string | null,
  isNext: boolean
) => ({
  type: FETCH_RESTAURANT_SUCCESS as typeof FETCH_RESTAURANT_SUCCESS,
  payload: { restaurants, nextUrl, isNext }
});

export const fetchRestaurantError = () => ({
  type: FETCH_RESTAURANT_ERROR as typeof FETCH_RESTAURANT_ERROR
});

export type RestaurantActions =
  | ReturnType<typeof fetchRestaurant>
  | ReturnType<typeof fetchRestaurantSuccess>
  | ReturnType<typeof fetchRestaurantError>;
