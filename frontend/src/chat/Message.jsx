import React from 'react';
import SendInput from './SendInput';
import ChatContainer from './ChatContainer';
import { useSelector } from 'react-redux';

const Message = () => {
  const {selectedUsers} = useSelector(store=>store.user)
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2">
        <div className="avatar online">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={selectedUsers?.profilePhoto} 
              alt="user profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p>{selectedUsers?.fullName}</p>
        </div>
      </div>
      <ChatContainer />
      <SendInput />
    </div>
  );
};

export default Message;
