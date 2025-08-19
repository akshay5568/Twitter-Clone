import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    post:[]
}

export const PostReducer = createSlice({
    name:"Post",
    initialState,
    reducers:{
        allUserPosts: (state,action) => {
            state.post = action.payload;
        }
    }
})