import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
