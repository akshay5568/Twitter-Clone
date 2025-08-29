import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const UserReducer = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action) => {
      try {
        state.user = action.payload;
      } catch (error) {
        console.error(error);
      }
    },
    updateUserProfile: (state, action) => {
      try {
        const newProfileImg = action.payload;
        state.user.profileImg = newProfileImg;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { addUser, updateUserProfile } = UserReducer.actions;
export default UserReducer.reducer;
