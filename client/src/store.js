import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice'

const Store = configureStore({
    reducer : {
        location : locationReducer,
        filter : filterReducer,
        cart : cartReducer
    }
})

export default Store;