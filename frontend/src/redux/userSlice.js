import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null, 
    otherUsers:null,
    selectedUsers:null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setotherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setselectedUsers: (state, action) => {
      state.selectedUsers = action.payload;
    },
    
  },
});

export const { setUserInfo,setotherUsers,setselectedUsers} = userSlice.actions;
export default userSlice.reducer;
