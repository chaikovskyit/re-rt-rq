import { userAPI } from './../services/UserService';
import { postAPI } from './../services/PostService';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import useReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
	useReducer,
	[postAPI.reducerPath]: postAPI.reducer,
	[userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(postAPI.middleware, userAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
