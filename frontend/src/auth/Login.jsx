import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API } from "@/utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/redux/userSlice";
const Login = () => {
  const[ user, setuser] = useState({
    username:"",
    password:""  
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const SigninHandler= async (e)=>{
  e.preventDefault();
  try {
    const res = await axios.post(`${USER_API}/login`, user, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    toast.success(res.data.message)
      navigate("/")
      dispatch(setUserInfo(res.data))
  } catch (error) {
    toast.error(error.response.data.message)
  }

setuser({
  username:"",
  password:"",
})

 }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="w-full max-w-md p-8 bg-background rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={SigninHandler} className="space-y-4">
     
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" 
              value={user.username}
              placeholder="Enter your username" 
              onChange={(e) => setuser({ ...user, username: e.target.value })}
              required />
            </div>
         
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" 
            type="password" 
            value={user.password}
            onChange={(e) => setuser({ ...user,password: e.target.value })}
            placeholder="Enter your password" 
            required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <span className="text-sm">
          Don't have an account? <Link to="/signup" className="font-medium text-blue-700">Signup</Link>
        </span>
      </div>
    </div>
  );
}

export default Login