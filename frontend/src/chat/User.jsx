import { setselectedUsers } from "@/redux/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const User = (props) => {
  const user = props.user;
  const dispatch = useDispatch();
  const { selectedUsers, onlineUsers } = useSelector(store => store.user);

  // Convert IDs to strings for proper comparison
  const online = onlineUsers?.includes(user._id.toString());

  const UserHandler = () => {
    dispatch(setselectedUsers(user));
  };

  return (
    <>
      <div
        onClick={UserHandler}
        className={`flex gap-2 items-center text-white hover:text-black hover:bg-[#3a1d70] rounded-full p-2 cursor-pointer ${selectedUsers?._id === user?._id ? 'bg-[#3a1d70] text-white' : ''}`}
      >
        <div className={`avatar ${online ? 'online' : ''}`}>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={user?.profilePhoto}
              alt={`${user?.fullName}'s avatar`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2 ">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="my-0 py-0 h-1"></div>
    </>
  );
};

export default User;
