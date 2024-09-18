import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/login";
import Home from "./chat/Home";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";




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
  const [socket, setsocket] = useState(null)
  //user is authenticated or not
  const {userInfo} = useSelector(store=>store.user)

  useEffect(()=>{
    if (userInfo) {
      const socket = io("http://localhost:8000",{
      })
      setsocket(socket)
    }
  },[userInfo])
  return (
  <div>
     <RouterProvider router={router} />
  </div>
  )
}

export default App
