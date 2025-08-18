import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : []
}

export const UserReducer = createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser : (state,action) => {
            state.user = action.payload;
        }
    }
})

export const {addUser} = UserReducer.actions;
export default UserReducer.reducer;