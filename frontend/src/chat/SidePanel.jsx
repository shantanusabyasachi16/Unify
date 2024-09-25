import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Search } from "lucide-react";
import Allusers from "./Allusers";
import axios from "axios";
import { USER_API } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setotherUsers, setUserInfo } from "@/redux/userSlice";

const SidePanel = () => {
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [find, setFind] = useState("");
  const navigate = useNavigate();

  const logouthandler = async () => {
    try {
      const res = await axios.get(`${USER_API}/logout`);
      toast.success(res.data.message);
      navigate("/login");
      dispatch(setUserInfo(null));
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const searchUser = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(find.toLowerCase())
    );
    if (searchUser) {
      dispatch(setotherUsers([searchUser])); // Use an array to replace the user list
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-[#000000] via-[#1e0a3a] to-[#000000] text-white h-full flex flex-col justify-between">
     
      <div>
        {/* Search form */}
        <form
          onSubmit={searchHandler}
          className="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8 w-full"
        >
          <input
            value={find}
            onChange={(e) => setFind(e.target.value)}
            className="input input-bordered rounded-full h-10 px-4 w-full text-white bg-[#3a1d70] hover:bg-[#1e0a3a] transition duration-200 ease-in-out sm:h-12 md:h-12"
            type="text"
            placeholder="Search..."
          />
          <Button
            type="submit"
            className="p-2 bg-[#3a1d70] text-white hover:bg-[#1e0a3a] transition duration-200 ease-in-out rounded-full h-10 sm:h-12 md:h-12"
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </form>

        {/* User list */}
        <div className="mt-4 space-y-4">
          <Allusers />
        </div>
      </div>

      {/* Logout button at the bottom */}
      <div className="pt-4 border-t border-gray-700 mt-4">
        <Button
          onClick={logouthandler}
          className="w-full bg-[#3a1d70] hover:bg-[#1e0a3a] transition duration-200 ease-in-out flex items-center justify-center h-10 sm:h-12 md:h-12"
        >
          <LogOut className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </div>
  );
};

export default SidePanel;
