import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import filterReducer from './slices/filterSlice';

const Store = configureStore({
    reducer : {
        location : locationReducer,
        filter : filterReducer
    }
})

export default Store;