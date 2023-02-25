import React from "react";
import picProfile from "../../../pic/egg.webp";
import Search from "./searchBar/Search";
function Navb() {
  return (
    <div className="bg-gray-900 h-20 w-full flex justify-between items-center mx-auto  ">
      <div className="flex item-center">
        <img src={picProfile} className="w-14 h-14 rounded-full ml-5" alt="profilePic"></img>
        <div>
          <p className="ml-3 text-white">user name </p>
          <p className="ml-3 text-gray-500">0912723479+0</p>
        </div>
      </div>
      <Search></Search>
    </div>
  );
}

export default Navb;
