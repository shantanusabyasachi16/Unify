import React from 'react';
import SendInput from './SendInput';
import ChatContainer from './ChatContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setselectedUsers } from '@/redux/userSlice';

const Message = () => {
  const { selectedUsers, userInfo, onlineUsers } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const online = onlineUsers?.includes(selectedUsers?._id?.toString());

  return (
    <>
      {selectedUsers != null ? (
        <div className="flex flex-col h-full">
          <div className="flex gap-2 items-center bg-gradient-to-r from-[#000000] via-[#1e0a3a] to-[#000000] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3">
            <div className={`avatar ${online ? 'online' : ''}`}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
                <img 
                  src={selectedUsers?.profilePhoto} 
                  alt="user profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <p className='font-bold text-xl sm:text-2xl md:text-2xl font-Josefin Sans'>{selectedUsers?.fullName}</p>
            </div>
          </div>
          <ChatContainer />
          <SendInput />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-full bg-gradient-to-r from-[#000000] via-[#1e0a3a] to-[#000000]'>
          <h1 className='text-4xl sm:text-5xl font-bold text-white'>Hi, {userInfo?.fullName}</h1>
          <h1 className='text-2xl sm:text-3xl text-white'>Let's start a conversation</h1>
        </div>
      )}
    </>
  );
};

export default Message;
