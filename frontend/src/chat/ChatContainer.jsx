import React from "react";
import Singlemessage from "./Singlemessage";
import useGetMessages from "@/hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetSocketMessage from "@/hooks/useGetSocketMessage";



const ChatContainer = () => {
  useGetMessages();
  useGetSocketMessage();
  
  const { messages } = useSelector((store) => store.message);
  if (!messages) return;
  return (
    <div className="px-4 flex-1 overflow-auto">
      { messages && messages.map((message) => {
        return <Singlemessage key={message._id} message={message} />;
      })}
    </div>
  );
};

export default ChatContainer;
