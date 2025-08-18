import {configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserReducer';

export const Store = configureStore({
    reducer:{
        user:UserReducer,
    },
})