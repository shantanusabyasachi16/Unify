import { setMessages } from '@/redux/Messageslice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetSocketMessage = () => {
    const {socket} = useSelector(store=>store.socket)
  const {messages} = useSelector(store=>store.message)
    const dispatch = useDispatch();
  useEffect(()=>{
 socket?.on("newMessages",(newMessage)=>{
dispatch(setMessages([...messages,newMessage]))
 })
  },[socket,setMessages,messages])
}

export default useGetSocketMessage;