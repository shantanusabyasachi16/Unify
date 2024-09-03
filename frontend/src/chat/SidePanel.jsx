import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Allusers from "./Allusers";

const SidePanel = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-800 text-white h-full">
      <form action="" className="flex items-center gap-2 mb-4">
        <input
          className="input input-bordered rounded-md flex-grow h-10 px-4 text-gray-800"
          type="text"
          placeholder="Search..."
        />
        <Button type="submit" className="p-2 bg-gray-700">
          <Search className="h-5 w-5 text-white" />
        </Button>
      </form>

      <div className="mt-4 space-y-4">
        <Allusers />
        <div className="pt-4 border-t border-gray-700">
          <Button className="w-full bg-red-600">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
