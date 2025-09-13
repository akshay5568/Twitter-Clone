import {configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserReducer';
import PostReducer  from '../reducers/PostReducer';
import BookmarkReducer from '../reducers/BookmarkReducer';
import ReelsReducer  from '../reducers/ReelsReducer';
export const Store = configureStore({
    reducer:{
        user:UserReducer,
        post:PostReducer,
        bookmarks:BookmarkReducer,
        reels:ReelsReducer,
    },
})