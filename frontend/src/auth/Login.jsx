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
import { AuroraBackgroundDemo } from "@/Bg";
import { MovingBorderDemo } from "@/Moving";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SigninHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API}/login`, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      
      navigate("/");
      dispatch(setUserInfo(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setUser({ username: "", password: "" });
  };

  return (
    <AuroraBackgroundDemo>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg p-16 bg-black-900/80 rounded-2xl shadow-2xl backdrop-blur-lg z-10 relative">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-100">
            Login
          </h1>
          <form onSubmit={SigninHandler} className="space-y-10">
            <div>
              <Label htmlFor="username" className="text-gray-100 text-lg">
                Username
              </Label>
              <Input
                id="username"
                value={user.username}
                placeholder="Enter your username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
                className="text-sm rounded-full text-black "
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-100 text-lg">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
                required
                className="text-sm rounded-full text-black"
              />
            </div>
            <div className="flex justify-center">
              <MovingBorderDemo>
                <Button
                  type="submit"
                  className="text-xl rounded-xl bg-black hover:bg-black hover:text-white transition-all duration-200 p-4"
                >
                  Login
                </Button>
              </MovingBorderDemo>
            </div>
          </form>
          <span className="text-lg text-white block text-center mt-4">
            Don't have an account?
            <Link to="/signup" className="font-medium text-blue-400 hover:text-blue-500 ml-2">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </AuroraBackgroundDemo>
  );
};

export default Login;
