import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    post:[],
    userPost:[]
}

export const PostReducer = createSlice({
    name:"Post",
    initialState,
    reducers:{
        allUserPosts: (state,action) => {
            state.post = action.payload;
        },
        userPost:(state,action) => {
            state.userPost = action.payload;
        }
    }
})
export const {allUserPosts , userPost} = PostReducer.actions;
export default PostReducer.reducer;