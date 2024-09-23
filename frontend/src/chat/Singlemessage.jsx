import React from "react";
import Singlemessage from "./Singlemessage";
import useGetMessages from "@/hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetSocketMessage from "@/hooks/useGetSocketMessage";
import { VortexDemo } from "@/Vortesdemo";

const ChatContainer = () => {
  useGetMessages();
  useGetSocketMessage();

  const { messages } = useSelector((store) => store.message);
  if (!messages) return null; // Ensure a valid return

  return (
    <VortexDemo>
      <div className="absolute inset-0 px-4 flex flex-col overflow-auto bg-transparent">
        {messages.map((message) => (
          <Singlemessage key={message._id} message={message} />
        ))}
      </div>
    </VortexDemo>
  );
};

export default ChatContainer;
