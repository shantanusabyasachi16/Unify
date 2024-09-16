import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { MESSAGE_API } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "@/redux/Messageslice";

const SendInput = () => {
  const [input, setInput] = useState(''); 
  const dispatch = useDispatch();
  const { selectedUsers } = useSelector(store => store.user);
  const {messages} = useSelector(store=>store.message)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${MESSAGE_API}/send/${selectedUsers?._id}`, { message: input }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true 
        });
        console.log(res);
        dispatch(setMessages([...messages,res?.data?.newMessage]))
    } catch (error) {
        console.error(error);
    }
    setInput('');
};

  return (
    <form onSubmit={onSubmitHandler} className="px-4 py-2 w-full flex items-center bg-gray-600">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        className="border text-sm rounded-lg flex-grow p-3 border-zinc-500 bg-gray-600 text-white"
      />
      <Button
        type="submit"
        className="ml-2 text-sm text-white bg-gray-700 px-3 py-2 rounded-lg"
      >
        Send
      </Button>
    </form>
  );
};

export default SendInput;
