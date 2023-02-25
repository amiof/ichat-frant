import React from "react";
import eggPic from "../../pic/egg.webp";
function Navbar() {
  return (
    <div className="bg-gray-900 w-[calc(100%-30px)] h-16 py-5 flex items-center m-auto justify-between rounded-3xl px-5">
      <div className="flex items-center">
        <img src={eggPic} className="w-12 h-12 rounded-full ml-8"></img>
        <p className="ml-5">gourop name</p>
      </div>
      <div className="mr-5">
        <p>member</p>
      </div>
    </div>
  );
}

export default Navbar;
