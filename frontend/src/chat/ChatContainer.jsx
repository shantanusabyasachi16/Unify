import React from 'react'
import Singlemessage from './Singlemessage'
import useGetMessages from '@/hooks/useGetMessages'


const ChatContainer = () => {
  useGetMessages();
   
  return (
    <div className='px-4 flex-1 overflow-auto'>
    
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
    </div>
  )
}

export default ChatContainer