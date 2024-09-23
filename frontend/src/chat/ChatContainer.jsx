import React from "react";
import Singlemessage from "./Singlemessage";
import useGetMessages from "@/hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetSocketMessage from "@/hooks/useGetSocketMessage";
import { BackgroundBeamsDemo } from "@/Beams";

const ChatContainer = () => {
  useGetMessages();
  useGetSocketMessage();

  const { messages } = useSelector((store) => store.message);
  if (!messages) return null; // Ensure a valid return

  return (
    <BackgroundBeamsDemo>
      <div className="px-4 flex-1 overflow-auto bg-transparent">
        {messages.map((message) => (
          <Singlemessage key={message._id} message={message} />
        ))}
      </div>
    </BackgroundBeamsDemo>
  );
};

export default ChatContainer;
