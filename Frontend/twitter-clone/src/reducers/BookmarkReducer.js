import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
  userBookmark: [],
};

const BookmarkReducer = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    allBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },

    userAllBookmarks: (state, action) => {
      const userID = action.payload;

      const userDetails = state.bookmarks.filter(
        (i) => String(i.userId) === String(userID)
      );

      state.userBookmark = userDetails;
    },
  },
});

export const { allBookmarks, userAllBookmarks } = BookmarkReducer.actions;
export default BookmarkReducer.reducer;
