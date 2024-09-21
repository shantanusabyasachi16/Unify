import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API } from "@/utils/constant";
import { toast } from "sonner";
import { AuroraBackgroundDemo } from "@/Bg";
import { MovingBorderDemo } from "@/Moving";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const SignupHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API}/register`, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <AuroraBackgroundDemo>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-md p-8 bg-black-900 rounded-lg shadow-lg z-10 relative">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-100">
            Sign Up
          </h1>
          <form onSubmit={SignupHandler} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-gray-100 text-lg">
                  Full Name
                </Label>
                <Input
                  type="text"
                  value={user.fullName}
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
                  name="fullName"
                  placeholder="  Enter your fullname"
                  required
                  className="text-sm rounded-full text-black"
                />
              </div>
              <div>
                <Label htmlFor="username" className="text-gray-100 text-lg">
                  Username
                </Label>
                <Input
                  id="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  placeholder="Enter a username"
                  required
                  className="text-sm rounded-full text-black"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-100 text-lg">
                Password
              </Label>
              <Input
                id="password"
                value={user.password}
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter a password"
                required
                className="text-sm rounded-full text-black"
              />
            </div>
            <div>
              <Label
                htmlFor="confirmPassword"
                className="text-gray-100 text-lg"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                value={user.confirmPassword}
                type="password"
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                placeholder="Confirm your password"
                required
                className="text-sm rounded-full text-black"
              />
            </div>
            <div>
              <Label className="text-gray-100 text-lg">Gender</Label>
              <RadioGroup className="flex items-center gap-5 my-2">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                    checked={user.gender === "male"}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                    checked={user.gender === "female"}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Female</Label>
                </div>
              </RadioGroup>
            </div>
            <div className=" flex justify-center w-full ">
              
              <MovingBorderDemo>
                <Button
                  type="submit"
                  className="  text-lg rounded-full bg-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  Sign Up
                </Button>
              </MovingBorderDemo>
            </div>
  
          </form>
          <span className="text-lg text-white block text-center mt-4">
          Already have an account?
            <Link to="/login" className="font-medium text-blue-400 hover:text-blue-500 ml-2">
              Login
            </Link>
          </span>
        </div>
      </div>
    </AuroraBackgroundDemo>
  );
};

export default Signup;
