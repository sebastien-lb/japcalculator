import { State } from "../state";

import { RESTAURANT_STATE_SLICE_NAME } from "./restaurant.state";
import { Restaurant } from "./restaurant.types";

export const getRestaurants = (state: State): Array<Restaurant> => {
	if (state && RESTAURANT_STATE_SLICE_NAME in state) {
		return state[RESTAURANT_STATE_SLICE_NAME].restaurants || [];
	}
	return [];
};

export const hasMoreRestaurants = (state: State): boolean | undefined => {
	if (
		state &&
    RESTAURANT_STATE_SLICE_NAME in state &&
    state[RESTAURANT_STATE_SLICE_NAME].nextUrl
	) {
		return state[RESTAURANT_STATE_SLICE_NAME].nextUrl !== null;
	}
	return undefined;
};

export const getNextUrl = (state: State): string | undefined => {
	if (
		state &&
    RESTAURANT_STATE_SLICE_NAME in state &&
    state[RESTAURANT_STATE_SLICE_NAME].nextUrl
	) {
		return state[RESTAURANT_STATE_SLICE_NAME].nextUrl || undefined;
	}
	return undefined;
};

export const getIsLoadingRestaurants = (state: State): boolean => {
	if (state && RESTAURANT_STATE_SLICE_NAME in state) {
		return state[RESTAURANT_STATE_SLICE_NAME].isLoadingRestaurant;
	}
	return false;
};
