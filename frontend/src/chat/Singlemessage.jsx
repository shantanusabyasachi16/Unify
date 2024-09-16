import React, { useEffect, useRef } from 'react';

const Singlemessage = ({ message }) => {
  const messageRef = useRef(null); // Use messageRef instead of inputRef

  useEffect(() => {
    // Scroll to the message whenever it changes
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={messageRef} className="chat chat-end"> {/* Attach ref to message container */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50 text-black-900">12:45</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>
      <div className="chat-footer opacity-50"></div>
    </div>
  );
};

export default Singlemessage;
