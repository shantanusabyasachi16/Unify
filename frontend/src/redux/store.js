import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './Messageslice'
import Socketreducer from './socketSlice'

const store = configureStore({
  reducer: {
    user: userReducer, 
    message: messageReducer,
    socket : Socketreducer
  },
});

export default store;
