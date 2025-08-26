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
    },
    followAccount: (state,action ) => {
        const {followUserID,followingUserID} = action.payload;
  
        const userDetails = state.allUsersAccounts.find((u) => u._id == followUserID);   
        const followingUser = state.allUsersAccounts.find((u) => u._id == followingUserID);

        if (userDetails) {
            if(userDetails.followers.includes(followingUserID)) {
                 const userFound = userDetails.followers.indexOf(followingUserID);
                 if (userFound !== -1) userDetails.followers.splice(userFound,1);

                 const index = followingUser.following.indexOf(followUserID);
                 if(index !== -1) followingUser.following.splice(index,1);
            }
            else {
               userDetails.followers.push(followingUserID);
               followingUser.following.push(followUserID);
            }
        }
    }

  },
});
export const { allUserPosts, userPost, Likes , postDelete, allUsersAccounts , followAccount} = PostReducer.actions;
export default PostReducer.reducer;
