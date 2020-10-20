import { RestaurantActions } from "./restaurant.actions";
import { RestaurantState } from "./restaurant.state";
import {
	FETCH_RESTAURANT_REQUEST,
	FETCH_RESTAURANT_SUCCESS,
	FETCH_RESTAURANT_ERROR
} from "./restaurant.constants";

const initialState: RestaurantState = {
	isLoadingRestaurant: false,
	isErrorFetchingRestaurant: false
};

export const reducer = (
	state: RestaurantState = initialState,
	action: RestaurantActions
) => {
	switch (action.type) {
	case FETCH_RESTAURANT_REQUEST:
		return {
			...state,
			isLoadingRestaurant: true,
			isErrorFetchingRestaurant: false
		};
	case FETCH_RESTAURANT_SUCCESS:
		return {
			...state,
			restaurants: action.payload.isNext
				? [...(state.restaurants || []), ...action.payload.restaurants]
				: action.payload.restaurants,
			nextUrl: action.payload.nextUrl,
			isLoadingRestaurant: false,
			isErrorFetchingRestaurant: false
		};
	case FETCH_RESTAURANT_ERROR:
		return {
			...state,
			isLoadingRestaurant: false,
			isErrorFetchingRestaurant: true
		};
	}
	return state;
};
