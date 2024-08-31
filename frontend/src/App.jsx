import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/login";
import Home from "./chat/Home";




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
  
  return (
  <div>
     <RouterProvider router={router} />
  </div>
  )
}

export default App
