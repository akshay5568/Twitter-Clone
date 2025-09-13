import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    reels:[],
    userReels:[]
}


export const ReelsReducer = createSlice({
    name:"reels",
    initialState,
    reducers:{
        allReels:(state,action) => {
           state.reels = action.payload;
        },
        uploadReel:(state,action) => {
             state.reels = action.payload;
        }
    }
}) 

export const {uploadReel,allReels} = ReelsReducer.actions;   
export default ReelsReducer.reducer;