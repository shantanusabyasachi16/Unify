import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Singlemessage = ({ message }) => {
  const messageRef = useRef(null); 
const {userInfo,selectedUsers} = useSelector(store=>store.user)
  useEffect(() => {

    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={messageRef} className={`chat ${message?.senderId === userInfo?._id ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src={message?.senderId === userInfo?._id ? userInfo?.profilePhoto  : selectedUsers?.profilePhoto } />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs  opacity-90 text-black-900">12:45</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>
      <div className="chat-footer opacity-50"></div>
    </div>
  );
};

export default Singlemessage;
