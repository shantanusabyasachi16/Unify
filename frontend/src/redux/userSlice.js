import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setuser } = userSlice.actions;
export default userSlice.reducer;
