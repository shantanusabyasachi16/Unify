import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import axios from 'axios';
import { USER_API_END_POINT } from '@/Utils/Endpoints';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  
  // for login
  const loginHandler = async () => {
    // handle login
  };

  // for sign up
  const signupHandler = async () => {
    const response = await axios.post(`${USER_API_END_POINT}/signup`, {email,password })
    
    console.log(response);
    
    // handle sign up
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <CardTitle className="text-center text-2xl md:text-4xl font-bold mb-6">Welcome To Unify</CardTitle>
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2 gap-4 mb-6">
            <TabsTrigger value="login" className="font-bold text-sm sm:text-base">Login</TabsTrigger>
            <TabsTrigger value="signup" className="font-bold text-sm sm:text-base">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Login</CardTitle>
                <CardDescription className="text-sm">Please log in to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    placeholder="email"
                    type="email"
                    className="rounded-full p-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    placeholder="password"
                    type="password"
                    className="rounded-full p-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={loginHandler} className="w-full rounded-full p-4">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
                <CardDescription className="text-sm">Create a new account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    placeholder="email"
                    type="email"
                    className="rounded-full p-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    placeholder="password"
                    type="password"
                    className="rounded-full p-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                  <Input
                    placeholder="confirm password"
                    type="password"
                    className="rounded-full p-4"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={signupHandler} className="w-full rounded-full p-4">Sign Up</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Auth;