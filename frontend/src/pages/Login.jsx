import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="w-full max-w-md p-8 bg-background rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <form className="space-y-4">
     
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" required />
            </div>
         
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign In
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