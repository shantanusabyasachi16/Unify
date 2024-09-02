import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Allusers from "./Allusers";

const SidePanel = () => {
  return (
    <div>
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md flex-grow h-10 px-4"
          type="text"
          placeholder="Search..."
        />
        <Button type="submit" className="">
          <Search className="h-5 w-5" />
        </Button>
      </form>

      <div className="mt-4 space-y-2">
        {/* The space-y-2 class adds vertical spacing between each user */}
        <Allusers />\
        <div>
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
