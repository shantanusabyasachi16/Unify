import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/login";
import Home from "./chat/Home";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setsocket } from "./redux/socketSlice";
import { setonlineUsers } from "./redux/userSlice";




const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])
function App() {
 
  //user is authenticated or not
  const {userInfo} = useSelector(store=>store.user)
  const {socket}= useSelector(store=>store.socket)
  const dispatch = useDispatch();

useEffect(() => {
  if (userInfo) {
    const socket = io("http://localhost:8000", {  
      query:{
        userId:userInfo._id
      }
    });
     dispatch(setsocket(socket));
     socket.on('getOnlineUsers',(onlineUsers)=>{
dispatch(setonlineUsers(onlineUsers))
     })
     return ()=> socket.close();
  }else{
    if (socket) {
      socket.close();
      dispatch(setsocket(null))
    }
  }
  
}, [userInfo]);
  return (
  <div>
     <RouterProvider router={router} />
  </div>
  )
}

export default App
