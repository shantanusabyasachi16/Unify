import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SendInput = () => {
  return (
    <form className="px-4 py-2 w-full flex items-center bg-gray-600">
      <Input
        type="text"
        placeholder="Send a message..."
        className="border text-sm rounded-lg flex-grow p-3 border-zinc-500 bg-gray-600 text-white"
      />
      <Button
        className="ml-2 text-sm text-white bg-gray-700 px-3 py-2 rounded-lg"
      >
        Send
      </Button>
    </form>
  );
};

export default SendInput;
