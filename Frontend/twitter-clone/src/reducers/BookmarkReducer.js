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
      try {
        state.bookmarks = action.payload;
      } catch (error) {
        console.error(error);
      }
    },

    userAllBookmarks: (state, action) => {
      try {
        const userID = action.payload;

        state.userBookmark = state.bookmarks.filter(
          (i) => String(i.userId) === String(userID)
        );

      } catch (error) {
        console.error(error);
      }
    },

    userBookmarkDelete: (state, action) => {
      try {
        const bookmarkID = action.payload;
        console.log(bookmarkID);
        state.userBookmark = state.userBookmark.filter(bookID => bookID._id !== bookmarkID);   
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { allBookmarks, userAllBookmarks , userBookmarkDelete} = BookmarkReducer.actions;
export default BookmarkReducer.reducer;
