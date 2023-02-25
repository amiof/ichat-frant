import React from "react";
import image from "../../pic/background-pic.jpg";
import Navbar from "../chatbox-navbar/Navbar";
import Sendbar from "../sendBar/Sendbar";
function Chatbox() {
  return (
    <div
      className="bg-cover w-full h-full bg-no-repeat bg-left text-white flex flex-col items-center"
      style={{ backgroundImage: `URL(${image})` }}
    >
      <Navbar></Navbar>
      <div className="w-full h-full border-b-2 border-gray-600 mt-10 max-w-6xl"></div>

      <Sendbar></Sendbar>
    </div>
  );
}

export default Chatbox;
