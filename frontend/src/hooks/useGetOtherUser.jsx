import { USER_API } from '@/utils/constant'
import axios from 'axios'

import { useEffect } from 'react'

const useGetOtherUser = () => {
  useEffect(()=>{
const otherusers = async()=>{
    try {
        axios.defaults.withCredentials = true
        const res = await axios.get(`${USER_API}/`)
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
}

otherusers();
  },[])
}

export default useGetOtherUser