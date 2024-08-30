import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Home from "./pages/Home";



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
