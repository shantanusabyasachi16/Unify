import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  const[ user, setuser] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPasswword:"",
    gender:"",
  })
 const SignupHandler= (e)=>{
e.preventDefault();
console.log(user);
setuser({
  fullName:"",
  username:"",
  password:"",
  confirmPasswword:"",
  gender:"",
})

 }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="w-full max-w-md p-8 bg-background rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={SignupHandler} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
              type="text" 
              value={user.fullName}
              onChange={(e) => setuser({ ...user, fullName: e.target.value })}
              name="fullName" 
              placeholder="Enter your full name" 
             
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username"
               value={user.username}
               onChange={(e) => setuser({ ...user, username: e.target.value })}
               placeholder="Enter a username" 
               required />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password"
             value={user.password}
             type="password"
             onChange={(e) => setuser({ ...user, password: e.target.value })}
              placeholder="Enter a password"
               required />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" 
            value={user.confirmPasswword} 
            type="password" 
            onChange={(e) => setuser({ ...user, confirmPasswword: e.target.value })}
            placeholder="Confirm your password"
             required />
          </div>
          <div>
            <Label>Gender</Label>
            <div className="flex items-center space-x-4">
            <RadioGroup className="flex items-center gap-5 my-5">
              <div className="flex items-center space-x-2">
              <Input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setuser({ ...user, gender: e.target.value })}
                  checked={user.gender === "Male"}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setuser({ ...user, gender: e.target.value })}
                  checked={user.gender === "Female"}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Female</Label>
              </div>
              </RadioGroup>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <span className="text-sm">
          Already have an account? <Link to="/login" className="font-medium text-blue-700">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
