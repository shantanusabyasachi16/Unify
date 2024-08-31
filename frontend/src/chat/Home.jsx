import React from "react";
import SidePanel from "./SidePanel";
import Message from "./Message";

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 '>
      <SidePanel />
      <Message />
    </div>
  );
};

export default Home;
