import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Allusers from "./Allusers";
import axios from "axios";
import { USER_API } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setotherUsers } from "@/redux/userSlice";
import { es2015 } from "globals";

const SidePanel = () => {
  const {otherUsers} = useSelector(store=>store.user)
  const dispatch = useDispatch();
  const [find,setfind]= useState("")
  const navigate = useNavigate();
  const logouthandler =  async()=>{
  try {
    const res =  await axios.get(`${USER_API}/logout`)
    toast.success(res.data.message)
    navigate("/login")
  } catch (error) {
   console.log(error);
    
  }  
  }
  const searchHandler = ()=>{
   e.preventDefault();
  const searchuser =  otherUsers?.find((user)=>user.fullname.tolowerCase().includes(find.tolowerCase()))
if (searchuser) {
  dispatch(setotherUsers(searchuser))
}
else{
  toast.error("user not found")
}
}
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-800 text-white h-full">
      <form onSubmit={searchHandler} action="" className="flex items-center gap-2 mb-4">
        <input
        value={find}
        onChange={(e)=>setfind(e.target.value)}
          className="input input-bordered rounded-md flex-grow h-10 px-4 text-white"
          type="text"
          placeholder="Search..."
        />
        <Button type="submit" className="p-2 bg-gray-700">
          <Search className="h-5 w-5 text-white" />
        </Button>
      </form>

      <div className="mt-4 space-y-4">
        <Allusers />
        <div className="pt-4 border-t border-gray-700">
          <Button onClick={logouthandler} className="w-full bg-red-600">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
