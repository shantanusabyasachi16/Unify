import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { MESSAGE_API } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "@/redux/Messageslice";
import Picker from '@emoji-mart/react'; 
import { Send } from "lucide-react";

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
      <form onSubmit={onSubmitHandler} className="flex items-center gap-3 w-full p-3 bg-gradient-to-r from-[#1e0a3a] via-[#3a1d70] to-[#1e0a3a]">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 text-sm md:text-base text-white bg-gradient-to-r from-[#1e0a3a] via-[#3a1d70] to-[#1e0a3a] rounded-full   "
        />
        <div className="relative">
          <Button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3a1d70] text-white hover:bg-[#1e0a3a] transition duration-200 ease-in-out"
          >
            😊
          </Button>
          {showEmojiPicker && (
            <div className="absolute bottom-12 right-0">
              <Picker
                onEmojiSelect={handleEmojiSelect}
                theme="dark"
                emojiSize={22}
              />
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3a1d70] text-white hover:bg-[#1e0a3a] transition duration-200 ease-in-out"
        >
          <Send size={20} />
        </Button>
      </form>
    </div>
  );
};

export default SendInput;

