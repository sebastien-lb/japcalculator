import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { history, middleware } from "./Router/router";
import { RESTAURANT_STATE_SLICE_NAME } from "./restaurant/restaurant.state";
import { reducer as restaurantReducer } from "./restaurant/restaurant.reducer";
import { restaurantSaga } from "./restaurant/restaurant.sagas";

// const pUserReducer = persistReducer<UserState, UserActions>(
//   { key: 'userState', storage, blacklist: USER_STATE_PERSIST_BLACKLIST },
//   userReducer,
// );

const rootReducer = combineReducers({
	router: connectRouter(history),
	[RESTAURANT_STATE_SLICE_NAME]: restaurantReducer
});

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  	? (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  	: compose;
/* eslint-enable */
export const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(middleware, sagaMiddleware))
);

sagaMiddleware.run(restaurantSaga);

// export const persistor = persistStore(store);
