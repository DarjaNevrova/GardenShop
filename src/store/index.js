import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/productSlice';
import categoriesReducer from './slice/categoriesSlice';
import cartReducer from './slice/cartSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        categories: categoriesReducer,
        cart: cartReducer
    }
})