import React from "react";
import User from "./User";
import useGetOtherUser from "@/hooks/useGetOtherUser";
import { useSelector } from "react-redux";

const Allusers = () => {
  useGetOtherUser();
  const { otherUsers } = useSelector(store => store.user);
  if (!otherUsers) return null;

  return (
    <div className="max-h-96 overflow-auto flex-1">
      {otherUsers?.map((user) => {
        return (
          <User key={user._id} user={user} />
        );
      })}
    </div>
  );
};

export default Allusers;
