import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import counterReducer from '../feature/Counter/counterSlice'
import persistReducer from 'redux-persist/es/persistReducer';
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
};

const preloadedState = {};

export const rootReducer = combineReducers({
  counter: counterReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(logger),
	devTools: process.env.NODE_ENV !== "production",
	preloadedState,
	// enhancers: [],
})

export const persistor = persistStore(store);