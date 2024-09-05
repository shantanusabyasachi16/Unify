import { setotherUsers } from "@/redux/userSlice";
import { USER_API } from "@/utils/constant";
import axios from "axios";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetOtherUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const otherusers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`${USER_API}/`);

      
        dispatch(setotherUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    otherusers();
  }, []);
};

export default useGetOtherUser;
