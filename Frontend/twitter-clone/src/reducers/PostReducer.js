import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  userPost: [],
  allUsersAccounts:[],
};

export const PostReducer = createSlice({
  name: "Post",
  initialState,
  reducers: {
    allUserPosts: (state, action) => {
      state.post = action.payload;
    },
    userPost: (state, action) => {
      state.userPost = action.payload.flat();
    },
    Likes: (state, action) => {
      const { UserId, PostId } = action.payload;
      const post = state.post.find((post) => post._id === PostId);
      if (post) {
        if (post.likedBy.includes(UserId)) {
           const userfound = post.likedBy.indexOf(UserId)
          if (userfound !== -1) post.likedBy.splice(userfound,1);   
          Math.max(0,post.likes -= 1);
         
        } else {
            post.likedBy.push(UserId);
            post.likes += 1;
        }
      }
    },
    postDelete:(state,action) => {
        const id = action.payload;
        state.userPost = state.userPost.filter(post => post._id !== id);
        state.post = state.post.filter(post => post._id !== id);
    },
    allUsersAccounts:(state,action) => {
       state.allUsersAccounts = action.payload;
    }

  },
});
export const { allUserPosts, userPost, Likes , postDelete, allUsersAccounts} = PostReducer.actions;
export default PostReducer.reducer;
