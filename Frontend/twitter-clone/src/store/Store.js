import {configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserReducer';
import PostReducer  from '../reducers/PostReducer';

export const Store = configureStore({
    reducer:{
        user:UserReducer,
        post:PostReducer,
    },
})