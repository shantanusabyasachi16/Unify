import React from "react";
import SidePanel from "./SidePanel";
import Message from "./Message";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-hidden bg-gray-400">
      <div className="sm:w-1/3 md:w-1/4 w-full sm:h-full">
        <SidePanel />
      </div>
      <div className="flex-1 h-full">
        <Message />
      </div>
    </div>
  );
};

export default Home;
