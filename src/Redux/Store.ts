import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AppSlice from './Reducer/AppReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: AppSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, createLogger()],
});

export const persistor = persistStore(store);
