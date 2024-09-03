import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null, 
    otherUsers:null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setotherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    
  },
});

export const { setUserInfo,setotherUsers} = userSlice.actions;
export default userSlice.reducer;
