// src/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import categoriesReducer from './slices/categoriesSlice';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishListSlice';
import { apiSlice } from './apiSlice';
import addressReducer from './slices/addressSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart', 'wishlist'],
};

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    address: addressReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
