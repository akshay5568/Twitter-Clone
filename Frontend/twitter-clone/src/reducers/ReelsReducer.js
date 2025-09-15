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
           console.log(state.reels)
        },
        uploadReel:(state,action) => {
             state.reels = action.payload;
        },
        LikesOnReels:(state,action) => {
            const {reelsID,likedUserId} = action.payload;
            const reel = state.reels.find(u => u._id == reelsID);
            if(reel.Reelslikes.includes(likedUserId)) {
                reel.Reelslikes.splice(reel.Reelslikes.indexOf(likedUserId),1);
                console.log("Tha lekin ab hatta diya");
            }
            else{
                reel.Reelslikes.push(likedUserId);
                console.log("Nahi tha lekin ab hai")
            }
        }
    }
}) 

export const {uploadReel,allReels,LikesOnReels} = ReelsReducer.actions;   
export default ReelsReducer.reducer;