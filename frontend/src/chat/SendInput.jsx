import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { MESSAGE_API } from "@/utils/constant";
import { useSelector } from "react-redux";

const SendInput = () => {
  const [input,setinput] = useState();
 const {selectedUsers} = useSelector(store=>store.user)

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${MESSAGE_API}/send/${selectedUsers?._id}`,input,{
        headers:{
          "Content-Type":'application/json'
        },
        withCredentials:true
      })
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
   
  }
  return (
    <form onSubmit={onSubmitHandler} className="px-4 py-2 w-full flex items-center bg-gray-600">
      <Input
        type="text"
        value={input}
        onChange={(e)=>setinput(e.target.value)}
        placeholder="Send a message..."
        className="border text-sm rounded-lg flex-grow p-3 border-zinc-500 bg-gray-600 text-white"
      />
      <Button type="submit"
        className="ml-2 text-sm text-white bg-gray-700 px-3 py-2 rounded-lg"
      >
        Send
      </Button>
    </form>
  );
};

export default SendInput;
