import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { MESSAGE_API } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "@/redux/Messageslice";
import Picker from '@emoji-mart/react'; 

const SendInput = () => {
  const [input, setInput] = useState(''); 
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); 
  const dispatch = useDispatch();
  const { selectedUsers } = useSelector(store => store.user);
  const { messages } = useSelector(store => store.message);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${MESSAGE_API}/send/${selectedUsers?._id}`, { message: input }, {
        headers: {
          "Content-Type": 'application/json'
        },
        withCredentials: true 
      });
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.error(error);
    }
    setInput(''); // Clear input after sending
  };

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji.native); // Append selected emoji to input
  };

  return (
    <div className="relative w-full">
      <form onSubmit={onSubmitHandler} className="px-4 py-2 w-full flex items-center bg-[#05120d]">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="border text-sm rounded-lg flex-grow p-3 border-zinc-500 bg-[#05120d] text-white focus:outline-none md:text-base"
        />
        <Button
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
          className="ml-2 text-sm text-white bg-[#05120d] hover:bg-[#05120d] px-3 py-2 rounded-lg md:px-4"
        >
          😊
        </Button>
        <Button
          type="submit"
          className="ml-2 text-sm text-white bg-[#05120d hover:bg-[#05120d] px-3 py-2 rounded-lg md:px-4"
        >
          Send
        </Button>
      </form>

      {/* Emoji Picker - display conditionally at the bottom of the viewport */}
      {showEmojiPicker && (
        <div className="fixed bottom-0 right-0 mb-10 mr-4 z-50">
          <Picker
            onEmojiSelect={handleEmojiSelect}
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </div>
      )}
    </div>
  );
};

export default SendInput;
