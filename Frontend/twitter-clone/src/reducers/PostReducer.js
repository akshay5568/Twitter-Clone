import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  userPost: [],
};

export const PostReducer = createSlice({
  name: "Post",
  initialState,
  reducers: {
    allUserPosts: (state, action) => {
      state.post = action.payload;
    },
    userPost: (state, action) => {
      state.userPost = action.payload;
    },
    Likes: (state, action) => {
      const { UserId, PostId } = action.payload;
      const post = state.post.find((post) => post._id === PostId);

      if (post) {
           if (!post.likedBy) post.likedBy = []; 
        if (post.likedBy?.includes(UserId)) {
          post.likes -= 1;
           post.likedBy = post.likedBy.filter((id) => id !== UserId);
        } else {
            post.likes += 1;
             post.likedBy.push(UserId);
        }
      }
    },
  },
});
export const { allUserPosts, userPost, Likes } = PostReducer.actions;
export default PostReducer.reducer;
