import React, { useEffect } from 'react';
import SendInput from './SendInput';
import ChatContainer from './ChatContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setselectedUsers } from '@/redux/userSlice';

const Message = () => {
  const {selectedUsers,userInfo ,onlineUsers} = useSelector(store=>store.user)
  const dispatch = useDispatch();
  const online = onlineUsers?.includes(selectedUsers?._id?.toString());
//   useEffect(()=>{
// return()=> dispatch(setselectedUsers(null));
//   },[])
  return (
    <>
    {
      selectedUsers != null ?(
<div className="flex flex-col h-full">
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2">
      <div className={`avatar ${online ? 'online' : ''}`}>
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
      ):(
        <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-4xl font-bold'>Hi, {userInfo?.fullName }</h1>
        <h1 className='text-2xl'>Let's start a conversation</h1>
      </div>
      
        
      )
    }
    </>
    
  );
};

export default Message;
