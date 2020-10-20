import { SagaIterator } from "redux-saga";
import { takeLatest, call, put, select } from "redux-saga/effects";

import { fetchRestaurantSuccess, fetchRestaurant } from "./restaurant.actions";
import { FETCH_RESTAURANT_REQUEST } from "./restaurant.constants";
import { makeFetchRestaurant } from "./restaurant.api";
import { getNextUrl } from "./restaurant.selectors";

export function* fetchRestaurantSaga(
	fetchAction: ReturnType<typeof fetchRestaurant>
) {
	try {
		let rep1 = null;
		let rep2 = null;
		if (fetchAction.payload.fetchNext) {
			const nextFetchUrl = yield select(getNextUrl);
			rep1 = yield call(makeFetchRestaurant, nextFetchUrl);
		} else {
			rep2 = yield call(makeFetchRestaurant);
		}
		const { restaurants, nextUrl } = rep1 || rep2;
		yield put(fetchRestaurantSuccess(restaurants, nextUrl, rep2 === null));
	} catch (error) {
		console.error("Error while fetching restaurant", error);
	}
}

export function* restaurantSaga(): SagaIterator {
	yield takeLatest(FETCH_RESTAURANT_REQUEST, fetchRestaurantSaga);
}
