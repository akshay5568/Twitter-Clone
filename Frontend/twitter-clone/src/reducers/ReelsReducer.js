import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reels: [],
  userReels: [],
};

export const ReelsReducer = createSlice({
  name: "reels",
  initialState,
  reducers: {
    allReels: (state, action) => {
      try {
        const totalReels = action.payload.length;
        const start = Math.floor(Math.random() * totalReels);
        state.reels = action.payload.slice(start,totalReels);
      } catch (error) {
        console.error(error);
      }
    },
    uploadReel: (state, action) => {
      try {
        state.reels = action.payload;
      } catch (error) {
        console.error(error);
      }
    },
    LikesOnReels: (state, action) => {
      try {
        const { reelsID, likedUserId } = action.payload;
        const reel = state.reels.find((u) => u._id == reelsID);
        if (reel.Reelslikes.includes(likedUserId)) {
          reel.Reelslikes.splice(reel.Reelslikes.indexOf(likedUserId), 1);
          console.log("Tha lekin ab hatta diya");
        } else {
          reel.Reelslikes.push(likedUserId);
          console.log("Nahi tha lekin ab hai");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { uploadReel, allReels, LikesOnReels } = ReelsReducer.actions;
export default ReelsReducer.reducer;
