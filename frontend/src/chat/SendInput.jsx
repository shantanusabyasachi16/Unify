import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";


const SendInput = () => {
  return (
    <form className=" px-4 my-3">
      <div className="w-full relative">
        <Input
        type="text"
        placeholder='Send a message...'
        className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white'/>
         <Button> Send</Button>
      </div>
    </form>
  );
};

export default SendInput;
