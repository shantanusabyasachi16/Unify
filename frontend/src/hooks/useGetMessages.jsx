
import { setMessages } from '@/redux/Messageslice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const useGetMessages = () => {
    const  {selectedUsers} = useSelector(store=>store.user)
 const dispatch = useDispatch();
    useEffect(()=>{
const allmessage =  async ()=>{
    try {
        axios.defaults.withCredentials=true;
    const res = await axios.get(`http://localhost:8000/api/message/${selectedUsers?._id}`) ;  
    console.log(res);
    dispatch(setMessages(res.data))
    } catch (error) {
        console.log(error);
        
    }
   
}
allmessage();
 },[selectedUsers])
}

export default useGetMessages