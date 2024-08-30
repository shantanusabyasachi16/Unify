import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="w-full max-w-md p-8 bg-background rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" required />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter a username" required />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter a password" required />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
          </div>
          <div>
            <Label>Gender</Label>
            <div className="flex items-center space-x-4">
            <RadioGroup className="flex items-center gap-5 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="Male"
                className="curser-pointer"
                />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="Female"
                className="curser-pointer"
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
