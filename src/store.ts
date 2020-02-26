import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import editorSetting from './modules/editorSetting';

const rootReducer = combineReducers({
	editorSetting: editorSetting.reducer,
});

const setupStore = () => {
	const middlewares = [...getDefaultMiddleware()];
	return configureStore({
		middleware: middlewares,
		reducer: rootReducer
	});
};

const store = setupStore();
export default store;

export type AppState = ReturnType<typeof store.getState>;