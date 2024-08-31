import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Allusers from "./Allusers";


const SidePanel = () => {
  return (
    <div>
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md flex-grow h-10 px-4" // flex-grow makes the input expand
          type="text"
          placeholder="Search..."
        />
        <Button type="submit" className="">
          <Search className="h-5 w-5" />
        </Button>
        <Allusers/>
      </form>
    </div>
  );
};

export default SidePanel;
