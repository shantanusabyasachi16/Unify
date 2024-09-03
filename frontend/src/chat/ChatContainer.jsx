import React from 'react'
import Singlemessage from './Singlemessage'
import useGetOtherUser from '@/hooks/useGetOtherUser';

const ChatContainer = () => {

    useGetOtherUser();
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
        <Singlemessage/>
    </div>
  )
}

export default ChatContainer