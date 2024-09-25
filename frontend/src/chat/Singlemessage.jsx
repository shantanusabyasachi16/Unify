import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Singlemessage = ({ message }) => {
  const messageRef = useRef(null);
  const { userInfo, selectedUsers } = useSelector(store => store.user);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Function to format the message time dynamically
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div
      ref={messageRef}
      className={`chat ${message?.senderId === userInfo?._id ? 'chat-end' : 'chat-start'}`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src={message?.senderId === userInfo?._id ? userInfo?.profilePhoto : selectedUsers?.profilePhoto}
          />
        </div>
      </div>
      <div className="chat-header">
        {/* Dynamically show the time when the message was sent */}
        <time className="text-xs  text-white">
          {formatTime(message?.createdAt)} {/*reated at is timestamp*/}
        </time>
      </div>
      <div
        className={`chat-bubble ${message?.senderId === userInfo?._id ? 'bg-purple-400 text-black' : 'bg-pink-200 text-black '}`}
      >
        {message?.message}
      </div>
      <div className="chat-footer opacity-50"></div>
    </div>
  );
};

export default Singlemessage;
